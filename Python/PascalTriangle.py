# Given an integer numRows, return the first numRows of Pascal's triangle.
# In Pascal's triangle, each number is the sum of the two numbers directly above it

# Input: numRows = 5
# Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

n = int(input("Enter any Integer :"))
print("Returning Pascal's Triangle")
main = []
temp = [1,1]

for k in range(n):
    if (k == 0):
        main.append([1])
    elif(k == 1):
        main.append(temp)
    else:
        a = []
        for i in range(len(temp)+1):
            if (i == 0 or i == len(temp)):
                a.append(1)
            else:
                a.append(temp[i-1]+temp[i])
        main.append(a)
        temp = a


print(main)

