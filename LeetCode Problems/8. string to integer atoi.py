class Solution:
    def myAtoi(self, s: str) -> int:
        s = list(s.strip())
        if len(s) == 0:
            return 0

        sign = 1
        if s[0] == "-":
            sign = -1

        if s[0] in ["+", "-"]:
            del s[0]

        res, i = 0, 0
        while i < len(s):
            if not s[i].isdigit():
                break
            if s[i].isdigit():
                res = res * 10 + ord(s[i]) - ord("0")
                i += 1
        return min(2**31 - 1, max(sign * res, -(2**31)))
