import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.metrics import mean_squared_error

dataset = pd.read_csv('insurance.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values


from sklearn.preprocessing import LabelEncoder, OneHotEncoder
X[:,1] = LabelEncoder().fit_transform(X[:,1])
X[:,4] = LabelEncoder().fit_transform(X[:,4])
X[:,5] = LabelEncoder().fit_transform(X[:,5])

OHE_X = OneHotEncoder(categorical_features=[5])
X = OHE_X.fit_transform(X).toarray()

X=X[:, 1:]


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)

import statsmodels.formula.api as sm
X = np.append(arr = np.ones((1338,1)).astype(int), values = X, axis = 1)

X_opt = X[:, [0, 1, 2, 3, 4, 5, 6, 7, 8]]
regressor_OLS = sm.OLS(endog=y, exog=X_opt).fit()
regressor_OLS.summary()

X_opt = X[:, [0, 1, 2, 3, 4, 6, 7, 8]]
regressor_OLS = sm.OLS(endog=y, exog=X_opt).fit()
regressor_OLS.summary()

X_opt = X[:, [0, 2, 3, 4, 6, 7, 8]]
regressor_OLS = sm.OLS(endog=y, exog=X_opt).fit()
regressor_OLS.summary()

X_opt = X[:, [0, 2, 4, 6, 7, 8]]
regressor_OLS = sm.OLS(endog=y, exog=X_opt).fit()
regressor_OLS.summary()

X_opt = X[:, [0, 4, 6, 7, 8]]
regressor_OLS = sm.OLS(endog=y, exog=X_opt).fit()
regressor_OLS.summary()


from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train[:, [3, 4,5, 6, 7]], y_train)
y_predt = regressor.predict(X_test[:, [3, 4, 5, 6, 7]])
rms = np.sqrt(mean_squared_error(y_test, y_predt))
print(rms)
from sklearn.metrics import accuracy_score
rfc_acc = accuracy_score(y_test, y_predt)
rfc_acc*100
x_input = np.zeros_like(X_train)
x_input[0][0]=0
x_input[0][1]=0
x_input[0][2]=0
x_input[0][3]=int(input("Enter your age"))
x_input[0][4]=int(input("Enter your sex 1 for male and 0 for female"))
x_input[0][5]=int(input("Enter your bmi"))
x_input[0][6]=int(input("Enter the number of your children"))
x_input[0][7]=int(input("Enter 1 if smoker 0 if non smoker"))
pred =regressor.predict(x_input[:,[3,4,5,6,7]])
print(pred[0])

