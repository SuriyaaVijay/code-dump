from sklearn.datasets import load_wine
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

#Load the wine datset
wine_data, wine_target = load_wine(return_X_y=True)

#split the datset
X_train, X_test, y_train, y_test = train_test_split(wine_data, wine_target, test_size=0.25)

#Create the SVM model
svm = SVC(kernel='linear')

#Train the model
svm.fit(X_train, y_train)

#Predict the test set
y_pred = svm.predict(X_test)

#Print the classification report
print(classification_report(y_test, y_pred))
