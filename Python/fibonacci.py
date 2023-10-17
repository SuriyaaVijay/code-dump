#To print fibonacci series
#0 1 1 2 3 5 8 13 21 34 55 89..........
n=int(input('enter no of terms:'))
a,b=0,1
print(a,b,end=' ')
for i in range(0,n-1):
    c=a+b
    print(c,end=' ')
    a=b
    b=c
