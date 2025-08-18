class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        mapST, mapTS = {}, {}

        for ch_s, ch_t in zip(s, t):
            # If mapping already exists, check consistency
            if ch_s in mapST and mapST[ch_s] != ch_t:
                return False
            if ch_t in mapTS and mapTS[ch_t] != ch_s:
                return False

            # Create mapping
            mapST[ch_s] = ch_t
            mapTS[ch_t] = ch_s

        return True



# one liner

class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        return len(set(zip(s, t))) == len(set(s)) == len(set(t))
