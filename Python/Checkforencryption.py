# Load the image
from PIL import Image
from DRMLSB import LSB


new_image = Image.open("C:/Users/amanu/Pictures/pp.jpg")

# Create an instance of the LSB class
lsb_encoder = LSB()

# Decode the image to extract the hidden message
decoded_message = lsb_encoder.decode_image(new_image)

# Check if the decoded message represents a valid digital fingerprint
# You can compare it to the expected format and hashing method for a fingerprint
# For example, if it's a SHA-256 hash, you can check its length and character set.
expected_fingerprint_format = "SHA-256"  # Replace with the actual format
if len(decoded_message) == 64 and all(c in "0123456789abcdef" for c in decoded_message):
    print("The image contains a valid digital fingerprint.")
else:
    print("The image does not contain a valid digital fingerprint.")
