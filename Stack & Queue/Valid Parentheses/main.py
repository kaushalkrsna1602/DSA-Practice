class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {
            "{": "}",
            "[": "]",
            "(": ")"
        }
        for ch in s:
            if ch in mapping:  # if it's an opening bracket
                stack.append(ch)
            else:  # must be a closing bracket
                if not stack:  # stack is empty -> invalid
                    return False
                top = stack.pop()
                if mapping[top] != ch:  # mismatch
                    return False
        return len(stack) == 0
