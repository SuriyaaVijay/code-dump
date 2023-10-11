a = float(input("Enter the length of side a: "))
b = float(input("Enter the length of side b: "))
c = float(input("Enter the length of side c: "))
s = (a + b + c) / 2
area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
print("Area ="+str(area))
print("Value of s is "+str(s))

#format specifer using f-string method of editing strings

product = "Apples"
quantity = 10
price_per_unit = 0.75
total_cost = quantity * price_per_unit

invoice = f"You've purchased {quantity} {product} at ${price_per_unit:.2f} each. Total cost: ${total_cost:.2f}."
print(invoice)