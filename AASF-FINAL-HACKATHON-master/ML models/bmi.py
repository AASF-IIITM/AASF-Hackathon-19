
import numpy as np 
import pandas as pd

import os

data = pd.read_csv('500_Person_Gender_Height_Weight_Index.csv')
data_visual = pd.read_csv('500_Person_Gender_Height_Weight_Index.csv')

data.head()
data.shape
data.isnull().any()

import seaborn as sns
from matplotlib import pyplot as plt
import matplotlib

sns.__version__

def convert_status_to_description(x):
    if x['Index'] == 0:
        return 'Extremely Weak'
    elif x['Index'] == 1:
        return 'Weak'
    elif x['Index'] == 2:
        return 'Normal'
    elif x['Index'] == 3:
        return 'Overweight'
    elif x['Index']== 4:
        return 'Obesity'
    elif x['Index'] == 5:
        return 'Extreme Obesity'
data_visual['Status'] = data_visual.apply(convert_status_to_description,axis=1)
data_visual.head()
def convert_gender_to_label(x):
    if x['Gender'] == 'Male':
        return 1
    elif x['Gender'] == 'Female':
        return 0
data_visual['gender_lbl'] = data_visual.apply(convert_gender_to_label,axis=1)
data_visual.head()

people = data_visual['Gender'].value_counts() 

print(type(people))
people.head()

categories = data_visual['Status'].value_counts() 
categories

from sklearn.preprocessing import LabelEncoder, OneHotEncoder
lbl_enc = LabelEncoder()
data.iloc[:,0] = lbl_enc.fit_transform(data.iloc[:,0])
one_hot_enc_for_gender = OneHotEncoder(categorical_features = [0])
data = one_hot_enc_for_gender.fit_transform(data).toarray()

df = pd.DataFrame(data)
df.head()

from sklearn.preprocessing import StandardScaler
std_sc = StandardScaler()
df.iloc[:,0:-1] = std_sc.fit_transform(df.iloc[:,0:-1])

df.head()

X = df.iloc[:,:-1]
y = df.iloc[:,-1]

from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X,y,test_size = 0.2, random_state=0)

print(type(X_train))
X_train.head()

from sklearn.ensemble import RandomForestClassifier
rfc = RandomForestClassifier(n_estimators=200, criterion='entropy', random_state=0)
rfc.fit(X_train, y_train)

y_pred_rfc = rfc.predict(X_test)

from sklearn.metrics import confusion_matrix
rfc_cm = confusion_matrix(y_test, y_pred_rfc)
rfc_cm

from sklearn.metrics import accuracy_score
rfc_acc = accuracy_score(y_test, y_pred_rfc)
rfc_acc*100

def health_test(gender, height, weight):
    individual_data_dict = {'Gender':gender, 'Height':height, 'Weight':weight}   
    individual_data = pd.DataFrame(data = individual_data_dict, index=[0])
    individual_data.iloc[:,0] = lbl_enc.transform(individual_data.iloc[:,0])
    individual_data = one_hot_enc_for_gender.transform(individual_data).toarray()
    df = pd.DataFrame(individual_data)
    df.iloc[:,:] = std_sc.transform(df.iloc[:,:])
    y_pred = rfc.predict(individual_data)
    print("Your bmi is :",(10000*weight)/(height*height))
    if y_pred == 0:
        return 'Extremely Weak'
    elif y_pred == 1:
        return 'Weak'
    elif y_pred == 2:
        return 'Normal'
    elif y_pred == 3:
        return 'Overweight'
    elif y_pred == 4:
        return 'Obesity'
    elif y_pred == 5:
        return 'Extreme Obesity'
gender = input("enter your gender")
height =int(input("enter your height in cms:"))
weight =int(input("enter your weight in kgs:"))
gender=gender.capitalize()
sample_person = [gender,height,weight]
sample_result = health_test(*sample_person)
sample_result    