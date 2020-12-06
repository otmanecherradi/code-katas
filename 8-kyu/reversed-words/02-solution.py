
def reverseWords(s):
    s = s.split()
    s.reverse()
    return ' '.join(s)

solution = reverseWords('The greatest victory is that which requires no battle')
print(solution)
