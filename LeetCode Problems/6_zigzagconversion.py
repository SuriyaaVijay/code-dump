#https://leetcode.com/problems/zigzag-conversion/
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or numRows >= len(s):
            return s
        result = [''] * numRows
        index, step = 0, 1
        for char in s:
            result[index] += char
            if index == 0:
                step = 1
            elif index == numRows - 1:
                step = -1
            index += step

        return ''.join(result)


solution = Solution()

s1 = "PAYPALISHIRING"
numRows1 = 3
output1 = solution.convert(s1, numRows1)
print(output1)  

s2 = "PAYPALISHIRING"
numRows2 = 4
output2 = solution.convert(s2, numRows2)
print(output2)  

s3 = "A"
numRows3 = 1
output3 = solution.convert(s3, numRows3)
print(output3) 
