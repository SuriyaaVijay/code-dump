temperature = input("Please insert the temperature in Celsius, type \"no\" if you want to quit: ")
while (temperature != "no"):
    try:
        print(float(temperature) + 273.15)
    except:
        print("You did not type a number")
    temperature = input("Please insert the temperature in Celsius, type \"no\" if you want to quit: ")