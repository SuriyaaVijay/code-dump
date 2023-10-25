import turtle

# Create a turtle screen
wn = turtle.Screen()
wn.bgcolor("black")

# Create a turtle
mindblowing_turtle = turtle.Turtle()
mindblowing_turtle.shape("turtle")
mindblowing_turtle.speed(0)
mindblowing_turtle.color("red")

# Function to draw a mind-blowing pattern
def draw_mindblowing_pattern():
    for _ in range(72):
        for _ in range(2):
            mindblowing_turtle.forward(100)
            mindblowing_turtle.right(60)
            mindblowing_turtle.forward(100)
            mindblowing_turtle.right(120)
        mindblowing_turtle.right(5)

# Draw the mind-blowing pattern
draw_mindblowing_pattern()

# Close the window when clicked
wn.exitonclick()
