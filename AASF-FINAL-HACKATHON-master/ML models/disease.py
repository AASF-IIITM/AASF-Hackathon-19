import difflib
import pandas as pd
import numpy as np

df = pd.read_csv('Training.csv')

df.head()

X = df.iloc[:, :-1]
y = df['prognosis']

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=20)

from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier()
model.fit(X_train, y_train)

df_test = pd.read_csv('Testing.csv')

X_actual_test = df_test.iloc[:, :-1]
y_actual_test = df_test['prognosis']
y_pred = model.predict(X_actual_test)
from sklearn.metrics import accuracy_score
rfc_acc = accuracy_score(y_actual_test, y_pred)
rfc_acc*100
from sklearn.metrics import confusion_matrix
rfc_cm = confusion_matrix(y_actual_test, y_pred)
rfc_cm


symptoms_dict = {}

for index, symptom in enumerate(X):
    symptoms_dict[symptom] = index
    
symptoms_dict['cough']
input_vector = np.zeros(len(symptoms_dict))

maxlength = int(input("Enter the number of symptoms"))
i=0
while i<maxlength:
    sym=input("Enter the symptom:")
    print(sym)
    for symptom,index in symptoms_dict.items():
            if((difflib.SequenceMatcher(None, sym, symptom).ratio())>0.80):
                input_vector[[symptoms_dict[symptom]]] = 1
                
            
            
        
    i=i+1
model.classes_
model.predict_proba([input_vector])
probability = pd.DataFrame(model.predict_proba([input_vector]), columns=model.classes_)
model.predict([input_vector])
    

    
