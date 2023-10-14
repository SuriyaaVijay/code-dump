#simple and convenient bmi calculator program
weight = int(input("Enter your weight:"));
height = float(input("Enter your height:"));
x = weight/float(height*height);
if x < 18.5:
    print('Underweight')
if x>=18.5 and x<25:
    print("Normal")
if x >= 25 and x < 30:
   print('Overweight')
if x >= 30:
   print('Obesity')
