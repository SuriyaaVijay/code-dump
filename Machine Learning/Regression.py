import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

#Fetch the dataset
df = pd.read_csv('FoodTruck.csv')

#Split the dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(df['city_population'], df['food_truck_profit'], random_state = 69, test_size = 0.25)

#Load the model
model = LinearRegression()

#Train the model
model.fit(X_train.values.reshape(-1, 1), y_train.values.reshape(-1, 1))

#Predict for the test set
y_pred = model.predict(X_test.values.reshape(-1, 1))

#Plot for visualization
plt.scatter(X_test, y_test, color = 'blue')
plt.scatter(X_train, y_train, color = 'green')
plt.plot(X_test, y_pred, color = 'red')
plt.xlabel('City Population')
plt.ylabel('Food Truck Profit')
plt.legend(['Test Data', 'Train Data', 'Predicted Line'])
plt.show()