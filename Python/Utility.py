import cv2
import time
import mediapipe as mp
import numpy as np
import pyautogui


def control_volume():
    print("Virtual Control for Volume Selected")

    x1 = y1 = x2 = y2 = 0
    webcam = cv2.VideoCapture(0)
    my_hands = mp.solutions.hands.Hands()
    drawing_utils = mp.solutions.drawing_utils

    if not webcam.isOpened():
        print("Error: Could not open webcam.")
    
    while True:
        _, image = webcam.read()
        image = cv2.flip(image, 1)
        frame_height, frame_width, _ = image.shape
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        output = my_hands.process(rgb_image)
        hands = output.multi_hand_landmarks

        if hands:
            for hand in hands:
                drawing_utils.draw_landmarks(image, hand)
                landmarks = hand.landmark
                for id, landmark in enumerate(landmarks):
                    x = int(landmark.x * frame_width)
                    y = int(landmark.y * frame_height)
                    if id == 8:
                        cv2.circle(img=image, center=(x, y), radius=10, color=(0, 200, 200), thickness=3)
                        x1 = x
                        y1 = y
                    if id == 4:
                        cv2.circle(img=image, center=(x, y), radius=10, color=(0, 200, 200), thickness=3)
                        x2 = x
                        y2 = y

            dist = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5 // 4
            cv2.line(image, (x1, y1), (x2, y2), (250, 0, 0), 6)
            if dist > 50:
                pyautogui.press("volumeup")
            else:
                pyautogui.press("volumedown")

        cv2.imshow("Hand volume control", image)

        key = cv2.waitKey(1)
        if key == 27:
            break

    webcam.release()
    cv2.destroyAllWindows()

def virtual_mouse_control():
    webcam = cv2.VideoCapture(0)
    hand_detector = mp.solutions.hands.Hands()
    drawing_utils = mp.solutions.drawing_utils
    screen_width, screen_height = pyautogui.size()
    index_y = 0

    while True:
        _, frame = webcam.read()
        frame = cv2.flip(frame, 1)
        frame_height, frame_width, _ = frame.shape
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        output = hand_detector.process(rgb_frame)
        hands = output.multi_hand_landmarks

        if hands:
            for hand in hands:
                drawing_utils.draw_landmarks(frame, hand)
                landmarks = hand.landmark
                for id, landmark in enumerate(landmarks):
                    x = int(landmark.x * frame_width)
                    y = int(landmark.y * frame_height)
                    if id == 8:
                        cv2.circle(img=frame, center=(x, y), radius=10, color=(0, 255, 255))
                        index_x = screen_width / frame_width * x
                        index_y = screen_height / frame_height * y

                    if id == 4:
                        cv2.circle(img=frame, center=(x, y), radius=10, color=(0, 255, 255))
                        thumb_x = screen_width / frame_width * x
                        thumb_y = screen_height / frame_height * y
                        print('outside', abs(index_y - thumb_y))
                        if abs(index_y - thumb_y) < 140:
                            pyautogui.click()
                            pyautogui.sleep(1)
                        elif abs(index_y - thumb_y) < 280:
                            pyautogui.moveTo(index_x, index_y)
        
        cv2.imshow('Virtual Mouse', frame)
        key=cv2.waitKey(1)
        if key == 27:
            break

    webcam.release()
    cv2.destroyAllWindows()

# Main menu for user selection
while True:
    print("Choose an option:")
    print("1. AI Volume Control")
    print("2. AI Mouse Control")
    print("3. Exit")

    choice = input("Enter the option number: ")

    if choice == "1":
        control_volume()
    elif choice == "2":
        virtual_mouse_control()
    elif choice == "3":
        break
    else:
        print("Invalid choice. Please select a valid option.")

"""  Introduction-
This project is on automating hardware task like using mouse to move the cursor and increase, decrease, volume of your computer system. Through this, we can reduce our
dependency on a main hardware component, mouse of a PC or a laptop. This has been created with the computer vision libraries of python opencv, pyautogui and mediapipe.
This program uses the system camera to detect your tips of thumb and index fingers and control your mouse and volume with ease.

Documentation-
This program is made using python programming language and it's above mentioned libraries along with numpy and time. The function def control_volume(): controls
the volume and the function def virtual_mouse_control(): controls the mouse of the computer.
The function virtual_mouse_control captures the video of your hands and detect your thumb and index fingers and their tips. After that you can move the mouse cursor and click
but make sure you are within the frame's range that can detect your fingers.

The function control_volume controls the volume of the system. It also traces the tips of thum and index fingers of either hands and can be used to increase or decrease
volume. The camera captures the motion and distance between the tips of the fingers and decide wether to increase or decrease the volume. The sound of the system increase
when the distance between them is longer and reduces when it is small.

How to use it- Make sure you have python and necessary libraries mentioned above installed in your system. After that when you run the program you will be prompted to 
enter  input. Selecting 1 gives the option of voice control, selecting 2 gives the option of mouse control, selecting 3 gives the option of exiting.
After you have completed using either of them, click on the frame capturing the video and press escape key, the running program would be terminated and you will again
require to enter a option. """
