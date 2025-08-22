def groupAnagrams(strs):
    anagram_map = {}

    for word in strs:
        sorted_word = ''.join(sorted(word))  # sort the word alphabetically
        
        if sorted_word not in anagram_map:
            anagram_map[sorted_word] = [word]
        else:
            anagram_map[sorted_word].append(word)
    
    return list(anagram_map.values())


# Example usage:
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))




  
def groupAnagrams(strs):
      anagrams = defaultdict(list)
  
      for word in strs:
          key = ''.join(sorted(word))
          anagrams[key].append(word)
  
      return list(anagrams.values())