str = 'it appears that the the appears the most in the sentence'
dict = {}
list = str.split(" ")
for word in list:
    if word in dict:
        dict[word] = dict[word] + 1
    else:
        dict[word] = 1
for key, value in dict.items():
    print(f"'{key}' appears {value} time(s) in the string")
