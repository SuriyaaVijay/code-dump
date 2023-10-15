import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, Flatten, Dense
from tensorflow.keras.datasets import imdb

# Load the IMDb movie reviews dataset
num_words = 10000  # Only consider the top 10,000 most common words in the dataset
(train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=num_words)

# Preprocess the data
max_sequence_length = 250  # Maximum length of sequences
train_data = pad_sequences(train_data, maxlen=max_sequence_length)
test_data = pad_sequences(test_data, maxlen=max_sequence_length)

# Create a simple neural network model
model = Sequential()
model.add(Embedding(input_dim=num_words, output_dim=16, input_length=max_sequence_length))
model.add(Flatten())
model.add(Dense(64, activation='relu'))
model.add(Dense(1, activation='sigmoid'))

# Compile the model
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Train the model
batch_size = 128
epochs = 10
model.fit(train_data, train_labels, epochs=epochs, batch_size=batch_size, validation_split=0.2)

# Evaluate the model on the test data
test_loss, test_accuracy = model.evaluate(test_data, test_labels)
print(f'Test accuracy: {test_accuracy * 100:.2f}%')
