class calculator:
    def _init_(self, num1, num2):
        self.num1 = num1
        self.num2 = num2

    def add(self):
        return self.num1 + self.num2
    
    def subtract(self):
        return self.num1 - self.num2
    
    def multiply(self):
        return self.num1 * self.num2
    
    def divide(self):
        return self.num1 / self.num2
    

    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))

    calculator = calculator(num1, num2)

sum = calculator.add()
difference = calculator.subtract()
product = calculator.multiply()
quotient = calculator.divide()

print(f"The sum of the two numbers is: {sum}")
print(f"The difference of the two numbers is: {difference}")
print(f"The product of the two numbers is: {product}")
print(f"The quotient of the two numbers is: {quotient}")
    