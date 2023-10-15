class animal: #superclass
    def speak(self): #method/function in superclass
        print("animal speaking")

#child class dog inherits from superclass animal
class dog(animal): #child class
    def bark(self):
        print("dog barking")

d=dog() #object of child class
d.bark()
d.speak()