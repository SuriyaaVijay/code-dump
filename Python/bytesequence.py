size = 10
b = bytes(size)
print(b)

b = bytes(range(10))
print(b)

print( bytes([4,2,1]) )

print( bytearray(4) )
print( bytearray([1, 2, 3, 4]) )
print( bytearray("Hola!", "utf-8"))

a = bytearray([1,3,4,5])
print(a)
a[2] = 2
print(a)
