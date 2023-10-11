class Person:
    def __init__(self, name, registration_number,subject,marks):
        self.name = name
        self.registration_number = registration_number
        self.subject= subject
        self.marks=marks

    def introduce(self):
        print(f"Hello, my name is {self.name} and my registration number is {self.registration_number} and my favourite subject is {self.subject} also have scored{self.marks} in the same subject.")


person1 = Person("Shivangi", "12345", "Maths","97")
person2 = Person("Palakshi", "2450","Science","98")
person3 = Person("Anika", "2550","English","99")
person4 = Person("Ananya", "2650","Hindi","100")
person5 = Person("Anushka", "2750","Sanskrit","96")

person1.introduce()
person2.introduce()
person3.introduce()
person4.introduce()
person5.introduce()

