class Solution:
    def leap_year(self):
        if year % 400 == 0:
            print(f"Year {year} is A Leap Year")
        elif year % 4 == 0 and year % 100 != 0:
            print(f"Year {year} is A Leap Year")
        else:
            print(f"Year {year} is Not A Leap Year")


if __name__ == '__main__':
    year = int(input("Enter a year : "))
    s = Solution()
    s.leap_year()