lst = [0, 1]
class Solution:
    def fibonacci(self):
        for i in range(2, num):
            lst.append(lst[i-2] + lst[i-1])
        print(lst)


if __name__ == '__main__':
    num = int(input("Enter num : "))
    s = Solution()
    s.fibonacci()