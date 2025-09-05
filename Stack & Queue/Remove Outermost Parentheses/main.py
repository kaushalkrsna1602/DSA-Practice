# 1021. Remove Outermost Parentheses
# A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

# For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
# A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

# Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

# Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

# Example 1:

# Input: s = "(()())(())"
# Output: "()()()"
# Explanation: 
# The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
# After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
# Example 2:

# Input: s = "(()())(())(()(()))"
# Output: "()()()()(())"
# Explanation: 
# The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
# After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
# Example 3:

# Input: s = "()()"
# Output: ""
# Explanation: 
# The input string is "()()", with primitive decomposition "()" + "()".
# After removing outer parentheses of each part, this is "" + "" = "".
 

# Constraints:

# 1 <= s.length <= 105
# s[i] is either '(' or ')'.
# s is a valid parentheses string.


class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = []
        ans = ""
        
        for ch in s:
            if ch == "(":
                if stack:  # if stack not empty, it's not outermost
                    ans += ch
                stack.append(ch)
            else:  # ch == ")"
                stack.pop()
                if stack:  # if stack still not empty, it's not outermost
                    ans += ch
                    
        return ans




# without stack 

class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        level = 0
        ans = ""
        
        for ch in s:
            if ch == "(":
                if level > 0:  # if stack not empty, it's not outermost
                    ans += ch
                level += 1
            else:  # ch == ")"
                level -= 1
                if level > 0:  # if stack still not empty, it's not outermost
                    ans += ch
                    
        return ans