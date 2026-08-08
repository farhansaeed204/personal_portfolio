import math
import re
from collections import Counter

try:
    from .knowledge import KNOWLEDGE_CHUNKS
except ImportError:
    from knowledge import KNOWLEDGE_CHUNKS

K1 = 1.5
B = 0.75
TOP_K = 3


def _tokenize(text: str) -> list[str]:
    return re.findall(r"[a-z0-9]+", text.lower())


def _idf(doc_freq: int, n_docs: int) -> float:
    return math.log(1 + (n_docs - doc_freq + 0.5) / (doc_freq + 0.5))


def _build_index() -> tuple[list[dict[str, str]], list[Counter], dict[str, float]]:
    docs = [chunk["title"] + " " + chunk["text"] for chunk in KNOWLEDGE_CHUNKS]
    tokenized = [_tokenize(doc) for doc in docs]
    doc_freq: Counter[str] = Counter()
    for tokens in tokenized:
        for token in set(tokens):
            doc_freq[token] += 1
    idf = {token: _idf(freq, len(docs)) for token, freq in doc_freq.items()}
    return KNOWLEDGE_CHUNKS, tokenized, idf


CHUNKS, TOKENIZED, IDF = _build_index()
AVG_LEN = sum(len(tokens) for tokens in TOKENIZED) / len(TOKENIZED)


def _bm25_score(query_tokens: list[str], doc_tokens: list[str]) -> float:
    doc_len = len(doc_tokens)
    tf = Counter(doc_tokens)
    score = 0.0
    for token in query_tokens:
        if token not in IDF:
            continue
        freq = tf.get(token, 0)
        if freq == 0:
            continue
        denominator = freq + K1 * (1 - B + B * doc_len / AVG_LEN)
        score += IDF[token] * (freq * (K1 + 1)) / denominator
    return score


def retrieve(query: str, top_k: int = TOP_K) -> str:
    query_tokens = _tokenize(query)
    if not query_tokens:
        return "No results."

    scored = [
        (i, _bm25_score(query_tokens, tokens))
        for i, tokens in enumerate(TOKENIZED)
        if _bm25_score(query_tokens, tokens) > 0
    ]
    scored.sort(key=lambda x: x[1], reverse=True)
    best = scored[:top_k]
    if not best:
        return "No results."

    sections = []
    for i, score in best:
        chunk = CHUNKS[i]
        sections.append(f"[{chunk['title']}]\n{chunk['text']}")
    return "\n\n".join(sections)
