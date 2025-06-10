# *****
# *****
# *****
# *****
# *****

n = 5

for i in range(n):
    row= ""
    for j in range(n):
        row += "*"
    print(row)

# *
# **
# ***
# ****
# *****

for i in range(n):
    row = ""
    for j in range(i + 1):
        row += "*"
    print(row)

# 1
# 12
# 123
# 1234
# 12345

for i in range (n):
    row = ""
    for j in range(i + 1):
        row += str(j + 1)
    print(row)