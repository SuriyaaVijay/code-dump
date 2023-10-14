class Solution:
    def reverse(self, x: int) -> int:
        if x<0:
         sign = -1
         x = -x
        else:
            sign = 1
        
        reverse = str(x)[::-1]
        intr = int(reverse)*sign
        if intr < -2**31 or intr > 2**31 - 1:
            return 0
        return intr