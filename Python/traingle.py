class Triangle:
    def __init__(self, base, height):
        self.base = base
        self.height = height
    def area(self):
        return self.base * self.height / 2
    def perimeter(self):
        return self.base + 2 * self.height
    
t1 = Triangle(10, 20)
t2 = Triangle(20, 30)
area1 = t1.area()
print(f"The area of the first triangle is: {area1}")
area2 = t2.area()
print(f"The area of the second triangle is: {area2}")
perimeter1 = t1.perimeter()
print(f"The perimeter of the first triangle is: {perimeter1}")
perimeter2 = t2.perimeter()
print(f"The perimeter of the second triangle is: {perimeter2}")
