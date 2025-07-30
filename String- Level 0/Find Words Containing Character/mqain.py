class Solution(object):
    def findWordsContaining(self, words, x):
        result = []
        for i, word in enumerate(words):
            for ch in word:
                if ch == x:
                    result.append(i)
                    break
        return result