from PIL import Image, ImageDraw

def generate_image(maze, name):
    if not maze.solution:
        return

    cell_size = 40  # Adjust the size of each cell in pixels
    img_width = maze.width * cell_size
    img_height = maze.height * cell_size

    img = Image.new("RGB", (img_width, img_height), "white")
    draw = ImageDraw.Draw(img)

    for i, row in enumerate(maze.walls):
        for j, col in enumerate(row):
            cell_x = j * cell_size
            cell_y = i * cell_size

            if col:
                draw.rectangle(
                    [(cell_x, cell_y), (cell_x + cell_size, cell_y + cell_size)],
                    fill="black"
                )
            elif (i, j) == maze.goal:
                draw.rectangle(
                    [(cell_x, cell_y), (cell_x + cell_size, cell_y + cell_size)],
                    fill="green"
                )
            elif (i, j) == maze.start:
                draw.rectangle(
                    [(cell_x, cell_y), (cell_x + cell_size, cell_y + cell_size)],
                    fill="red"
                )
            elif (i, j) in maze.solution[1]:
                draw.rectangle(
                    [(cell_x, cell_y), (cell_x + cell_size, cell_y + cell_size)],
                    fill="blue"
                )
            elif (i, j) in maze.explored:
                draw.rectangle(
                    [(cell_x, cell_y), (cell_x + cell_size, cell_y + cell_size)],
                    fill="yellow"
                )

    img.save(name)
    print("Solved maze image saved as: ", name)
