import tkinter as tk

# Initialize the main window
root = tk.Tk()
root.title("Hacktoberfest Animation")

# Create a canvas
canvas = tk.Canvas(root, width=400, height=100)
canvas.pack()

# Text properties
text = "Hacktoberfest"
text_color = "blue"
font_size = 24

# Create the text item on the canvas
text_item = canvas.create_text(0, 50, text=text, fill=text_color, font=("Helvetica", font_size))

# Function to animate the text
def animate_text():
    x = canvas.coords(text_item)[0]
    if x < canvas.winfo_width() - font_size * len(text):
        canvas.move(text_item, 2, 0)
    else:
        canvas.coords(text_item, -font_size * len(text), 50)
    canvas.after(100, animate_text)

# Start the animation
animate_text()

# Run the application
root.mainloop()
