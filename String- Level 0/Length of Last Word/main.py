def countLastWord(s):
    n = len(s) - 1
    while n >= 0:
        if s[n] != " ":break
        n -= 1
    count = 0
    while n >= 0:
        if s[n] == " ": break
        n -= 1
        count += 1
    return count

print(countLastWord(" Length of Last Word  "))