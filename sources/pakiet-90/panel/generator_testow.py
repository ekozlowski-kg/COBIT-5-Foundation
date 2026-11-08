#!/usr/bin/env python3
"""Pomocnicze narzędzie offline: generowanie zestawu i ocenianie odpowiedzi.
Python 3.10+, wyłącznie biblioteka standardowa.

Przykłady (z katalogu głównego paczki):
  python panel/generator_testow.py generate --test 9 --out moj_test
  python panel/generator_testow.py generate --count 10 --seed 42 --out losowy
  python panel/generator_testow.py grade moj_test/klucz.json moj_test/odpowiedzi.json

W odpowiedzi.json wpisz trwałe identyfikatory opcji A–D. Przy własnym UI,
które przestawia opcje, zapisz identyfikator opcji, nie nową literę ekranową.
"""
import argparse
import json
import random
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

def read_json(path: Path):
    return json.loads(path.read_text(encoding='utf-8'))

def write_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')

def generate(args) -> None:
    bank = read_json(ROOT/'pytania/bank_pytan_90.json')['questions']
    rng = random.Random(args.seed)
    if args.test is not None:
        selected = [q for q in bank if q['original_test'] == args.test]
        if not selected:
            raise ValueError('Nie znaleziono wskazanego testu.')
    else:
        if not 1 <= args.count <= len(bank):
            raise ValueError(f'Liczba pytań musi wynosić od 1 do {len(bank)}.')
        if args.max_per_group < 1:
            raise ValueError('--max-per-group musi być dodatnie.')
        rng.shuffle(bank)
        counts = Counter()
        selected = []
        for q in bank:
            if counts[q['concept_group']] >= args.max_per_group:
                continue
            selected.append(q)
            counts[q['concept_group']] += 1
            if len(selected) == args.count:
                break
        if len(selected) != args.count:
            raise ValueError(f'Przy limicie grup dostępne są tylko {len(selected)} pytania. Zmień limit lub liczbę pytań.')
    out = Path(args.out)
    if out.exists() and any(out.iterdir()):
        raise ValueError('Katalog wyjściowy nie jest pusty; wybierz nowy, aby nie nadpisać próby.')
    out.mkdir(parents=True, exist_ok=True)
    # Wersja ucznia nie zawiera klucza ani wyjaśnień zdradzających odpowiedź.
    public = [{'id':q['id'], 'stem':q['stem'], 'options':[{'id':o['id'], 'text':o['text']} for o in q['options']]} for q in selected]
    write_json(out/'pytania.json', {'framework':'COBIT 5', 'questions':public})
    write_json(out/'klucz.json', {'framework':'COBIT 5', 'questions':selected})
    write_json(out/'odpowiedzi.json', {q['id']:None for q in selected})
    lines = ['# Test COBIT 5 Foundation', 'Klucz znajduje się w osobnym pliku.\n']
    for n,q in enumerate(public,1):
        lines.append(f"## {n}. {q['stem']}\nID: {q['id']}\n")
        lines.extend(f"{o['id']}. {o['text']}  " for o in q['options'])
        lines.append('')
    (out/'test.md').write_text('\n'.join(lines),encoding='utf-8')
    print(f'Zapisano {len(selected)} pytań w: {out.resolve()}')

def grade(args) -> None:
    questions = read_json(Path(args.key))['questions']
    answers = read_json(Path(args.answers))
    if not isinstance(answers,dict):
        raise ValueError('Odpowiedzi muszą być obiektem JSON: question_id → option_id lub null.')
    valid_ids = {q['id'] for q in questions}
    if set(answers)-valid_ids:
        raise ValueError('Plik odpowiedzi zawiera pytania spoza tego zestawu.')
    result = []
    for q in questions:
        answer = answers.get(q['id'])
        if answer is not None and answer not in {o['id'] for o in q['options']}:
            raise ValueError(f"Nieprawidłowa opcja dla {q['id']}: {answer!r}")
        result.append({'question_id':q['id'],'selected':answer,'correct':q['correct_option_id'],'is_correct':answer==q['correct_option_id'],'explanation':q['explanation'],'options':q['options']})
    correct = sum(r['is_correct'] for r in result)
    report = {'correct':correct,'total':len(result),'percentage':round(100*correct/len(result),2) if result else 0,'items':result,'note':'Ocena podanych odpowiedzi; narzędzie nie dopisuje jej automatycznie do historii.'}
    if args.out:
        target = Path(args.out)
        if target.exists():
            raise ValueError('Plik raportu już istnieje. Podaj nową nazwę.')
        write_json(target,report)
    else:
        print(json.dumps(report,ensure_ascii=False,indent=2))


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__,formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='command',required=True)
    gen = sub.add_parser('generate')
    gen.add_argument('--test',type=int,choices=range(1,10))
    gen.add_argument('--count',type=int,default=10)
    gen.add_argument('--seed',type=int)
    gen.add_argument('--max-per-group',type=int,default=2)
    gen.add_argument('--out',required=True)
    gen.set_defaults(func=generate)
    gr = sub.add_parser('grade')
    gr.add_argument('key'); gr.add_argument('answers'); gr.add_argument('--out')
    gr.set_defaults(func=grade)
    args = parser.parse_args()
    try:
        args.func(args)
    except (OSError,ValueError,KeyError,TypeError) as exc:
        print(f'Błąd: {exc}',file=sys.stderr)
        return 1
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
