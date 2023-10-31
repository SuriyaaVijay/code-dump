# Initialize an empty list to store tasks
tasks = []

# Function to add a task to the list
def add_task(task):
    tasks.append(task)
    print("Task added:", task)

# Function to remove a task from the list
def remove_task(task):
    if task in tasks:
        tasks.remove(task)
        print("Task removed:", task)
    else:
        print("Task not found")

# Function to list all tasks
def list_tasks():
    if tasks:
        print("Tasks:")
        for i, task in enumerate(tasks, start=1):
            print(f"{i}. {task}")
    else:
        print("No tasks in the list")

# Main program loop
while True:
    print("\nTodo List Menu:")
    print("1. Add Task")
    print("2. Remove Task")
    print("3. List Tasks")
    print("4. Quit")
    choice = input("Enter your choice: ")

    if choice == '1':
        task = input("Enter the task: ")
        add_task(task)
    elif choice == '2':
        task = input("Enter the task to remove: ")
        remove_task(task)
    elif choice == '3':
        list_tasks()
    elif choice == '4':
        break
    else:
        print("Invalid choice. Please choose a valid option.")
