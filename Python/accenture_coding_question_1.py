"""This is the question 1 i faced in the coding assesement in the accenture palcement drive

THIS IS QUESTION OF SHIFTING THE ELEMENTS OF PARTICULAR LENGHT INTO THE FRONT OF THE GIVEN ARRAY

in this question they will give the size of the array to take
the elements in the array will be taken from the user and 
we need to take the input of number to shit that number of elements into the front of the array """


x=int(input())
l=list(map(int,input().split()))
y=int(input())
l1=list(l[y:])
for i in l1:
    if i in l:
        l.remove(i)
print(*l1+l)