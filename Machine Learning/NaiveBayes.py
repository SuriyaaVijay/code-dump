import pandas as pd
from sklearn.naive_bayes import GaussianNB
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Load the Mushroom dataset
df = pd.read_csv('Mushroom.csv')

# Preprocessing data
le = LabelEncoder()
columns = ['class', 'cap-shape', 'cap-surface', 'cap-color',
       'does-bruise-or-bleed', 'gill-attachment', 'gill-color',
        'stem-color', 'has-ring', 'ring-type',
       'habitat', 'season']
for column in columns:
    encoded_values = le.fit_transform(df[column])
    df[column] = encoded_values

# Split the data into training/testing sets
X = df.drop('class', axis=1)
y = df['class']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)

# Create Naive Bayes classifier
classifier = GaussianNB()

#Train the model
classifier.fit(X_train, y_train)

#Predict on test set
y_pred = classifier.predict(X_test)

#Print the classification report
target_name = ["Edible", "Possinous"]
print(classification_report(y_test, y_pred, target_names= target_name))