class average:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def calculate_avg(self):
        avg = (self.a + self.b + self.c) / 3
        return avg

    def print_avg(self):
        print("The average of the three numbers is:", self.calculate_avg())


a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))
c = float(input("Enter the third number: "))

avg_obj = average(a, b, c)
avg_obj.print_avg()

