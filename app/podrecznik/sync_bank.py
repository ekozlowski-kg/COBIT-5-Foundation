"""Odświeża kopie quizów w slajdach z jednej recenzowanej puli."""
import hashlib
import html
import json
import re
from pathlib import Path


def sync_reviewed_decks():
    here = Path(__file__).resolve().parent
    app = here.parent
    questions = json.loads((app / "content/questions/reviewed.json").read_text())["pytania"]
    bank = {q["id"]: q for q in questions}
    legacy = json.loads((here / "legacy-sp1-order.json").read_text())
    counts = {}
    def rich(text):
        text = re.sub(r"\[\[([^]|]+)(?:\|([^]]+))?\]\]", lambda m: m[2] or m[1], text)
        text = html.escape(text)
        text = re.sub(r"\*\*(.*?)\*\*", r"<b>\1</b>", text)
        return re.sub(r"\*([^*]+)\*", r"<em>\1</em>", text)
    for file in here.glob("*.html"):
        text = file.read_text()
        match = re.search(r"<script>\s*window\.DECK\s*=(.*?)</script>", text, re.S)
        if not match:
            continue
        deck = json.loads(match[1].strip().rstrip(";"))
        for slide in deck["S"]:
            if "quiz" not in slide:
                continue
            quiz = slide["quiz"]
            qid = quiz.get("id")
            if qid not in bank:
                raise ValueError(f"{file.name}: pytanie poza recenzowaną pulą: {qid}")
            q = bank[qid]
            # Zachowaj kolejność nadaną w generatorze, ale treść i klucz bierz z banku.
            def label(s):
                return re.sub(r"<[^>]*>|\*|\[\[|\]\]", "", s).strip()
            old_order = [label(o["t"]) for o in quiz["opcje"]]
            options = sorted(q["opcje"], key=lambda o: old_order.index(label(o["tekst"])) if label(o["tekst"]) in old_order else len(old_order))
            quiz.update({"id": qid, "sylabus": q["sylabus"], "tresc": rich(q["tresc"]),
                         "kontekst": rich(q.get("scenariusz", "")), "kurs": rich(q.get("wyjasnienie", "")),
                         "opcje": [{"t": rich(o["tekst"]), "ok": o["poprawna"], "w": rich(o["wyjasnienie"])} for o in options]})
        signatures = [(i, s.get("quiz")) for i, s in enumerate(deck["S"]) if s.get("quiz")]
        deck["bankRevision"] = hashlib.sha256(json.dumps(signatures, sort_keys=True).encode()).hexdigest()[:16]
        deck["legacySp1Order"] = legacy.get(file.name, [])
        counts[file.name] = {"pytania": sum("quiz" in s for s in deck["S"]),
                             "slajdy": len(deck["S"]), "bankRevision": deck["bankRevision"]}
        text = text[:match.start()] + "<script>window.DECK=" + json.dumps(deck, ensure_ascii=False, separators=(",", ":")) + ";</script>" + text[match.end():]
        file.write_text(text)
    spis_file = here / "spis.js"
    spis_text = spis_file.read_text()
    spis = json.loads(spis_text[spis_text.index("["):spis_text.rindex("]") + 1])
    for chapter in spis:
        for part in chapter["parts"]:
            if part["href"] in counts:
                part.update(counts[part["href"]])
    spis_file.write_text("window.SPIS=" + json.dumps(spis, ensure_ascii=False, separators=(",", ":")) + ";\n")


if __name__ == "__main__":
    sync_reviewed_decks()
