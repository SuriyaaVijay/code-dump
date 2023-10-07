from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.neural_network import MLPClassifier
from sklearn.metrics import classification_report

#Load datsets digits
digits = load_digits()

#Split the datset
X_train, X_test, y_train, y_test = train_test_split(digits.data, digits.target, test_size=0.25)

#Create the Nearual Network
clf = MLPClassifier(hidden_layer_sizes=(100,))

#Train the model
clf.fit(X_train, y_train)

#Predict the test set
y_pred = clf.predict(X_test)

#Print the classification report
print(classification_report(y_test, y_pred))
