from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report

# Load the iris dataset
iris_data, iris_target = load_iris(return_X_y=True)

# Split the data into training/testing sets
X_train, X_test, y_train, y_test = train_test_split(iris_data, iris_target, test_size = 0.25)

#Load the Logistic Regression model
log_reg = LogisticRegression()

#Train the model
log_reg.fit(X_train, y_train)

#Predict for the test set
y_pred = log_reg.predict(X_test)

#Print the classification report
print(classification_report(y_test, y_pred))