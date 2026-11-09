"""Regresje ograniczonej puli, pokrycia i kopii pytań w podręczniku."""
import html
import json
import re
import sys
import unittest
from pathlib import Path

APP = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(APP / "tools"))
import serve


def plain(text):
    text = re.sub(r"\[\[([^]|]+)(?:\|([^]]+))?\]\]", lambda m: m[2] or m[1], text)
    return re.sub(r"\s+", " ", re.sub(r"<[^>]*>|\*", "", html.unescape(text))).strip()


class ReviewedBank(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.bundle = serve.build()
        cls.bank = {q["id"]: q for q in cls.bundle["pytania"]}

    def test_limit_and_every_original_reviewed(self):
        self.assertLessEqual(len(self.bank), 400)
        self.assertEqual(len(self.bank), len(self.bundle["pytania"]))
        review = json.loads((APP.parent / "docs/REJESTR-RECENZJI-PYTAN.json").read_text())
        self.assertEqual(len(review["pytania"]), 1711)
        self.assertEqual(len({q["id"] for q in review["pytania"]}), 1711)
        self.assertEqual(review["aktywnaPula"], len(self.bank))
        self.assertTrue(all(len(q["kontrola"]) == 4 and q["decyzja"] for q in review["pytania"]))

    def test_full_explanations_and_no_literal_duplicates(self):
        stems = set()
        for q in self.bank.values():
            self.assertEqual(len(q["opcje"]), 4, q["id"])
            self.assertEqual(sum(o["poprawna"] for o in q["opcje"]), 1, q["id"])
            self.assertTrue(q["wyjasnienie"] and q["zrodlo"], q["id"])
            self.assertNotEqual(q["status"], "oficjalne")
            for o in q["opcje"]:
                self.assertGreater(len(o["wyjasnienie"]), 8, q["id"])
                self.assertNotRegex(o["wyjasnienie"], r"^(?:Nie\.|s\. \d+\.?|Rysunek \d+\.?)$")
            stem = plain(q.get("scenariusz", "") + " " + q["tresc"]).casefold()
            self.assertNotIn(stem, stems, q["id"])
            stems.add(stem)

    def test_all_topics_and_sets_are_solvable(self):
        topics = {t["kod"] for t in self.bundle["sylabus"]["tematy"] if t["kod"][:2] in serve.OBSZARY}
        covered = {c for q in self.bank.values() for c in q["sylabus"]}
        self.assertTrue(topics <= covered)
        self.assertEqual(topics, set(self.bundle["nauka"]))
        tests = self.bundle["testy"]["zestawy"]
        self.assertEqual(set(self.bank), {i for t in tests for i in t["pytania"]})
        for t in tests:
            self.assertEqual(len(t["pytania"]), len(set(t["pytania"])))
            self.assertTrue(set(t["pytania"]) <= set(self.bank))
        papers = [set(t["pytania"]) for t in tests if t["id"].startswith("arkusz-")]
        self.assertEqual([len(p) for p in papers], [50, 50])
        self.assertFalse(papers[0] & papers[1])
        for lesson in self.bundle["lekcje"]:
            for field in ("cwiczenia", "zgadnij", "zapas"):
                self.assertTrue(set(lesson[field]) <= set(self.bank), lesson["id"])

    def test_no_hidden_or_stale_questions_in_decks(self):
        count = 0
        for file in (APP / "podrecznik").glob("*.html"):
            match = re.search(r"window\.DECK\s*=(.*?)</script>", file.read_text(), re.S)
            if not match:
                continue
            deck = json.loads(match[1].strip().rstrip(";"))
            self.assertTrue(deck.get("bankRevision"), file.name)
            for slide in deck["S"]:
                if "quiz" not in slide:
                    continue
                count += 1
                quiz = slide["quiz"]
                source = self.bank[quiz["id"]]
                self.assertEqual(plain(quiz["tresc"]), plain(source["tresc"]), file.name)
                actual = {(plain(o["t"]), bool(o.get("ok")), plain(o["w"])) for o in quiz["opcje"]}
                expected = {(plain(o["tekst"]), o["poprawna"], plain(o["wyjasnienie"])) for o in source["opcje"]}
                self.assertEqual(actual, expected, (file.name, quiz["id"]))
        self.assertGreater(count, 100)


if __name__ == "__main__":
    unittest.main()
