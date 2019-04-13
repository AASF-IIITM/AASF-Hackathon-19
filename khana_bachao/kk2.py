import pandas as pd
import numpy as np
from tensorflow import keras

class kk:
	def predict(a,b,c,d,e,f):
		new_model = keras.models.load_model('kk.h5')
		new_model.summary()
		#test_x = np.array([[0.8, 21.0, 632, 0, 210, 1]])
		test_x = np.array([[float(a), float(b), float(c), float(d), float(e),float(f)]])
		# 850
		# print(np.shape(test_x))
		# print(test_x)
		acc = new_model.predict(test_x)
		# print(acc)
		return acc

#kk = kk.predict()
#print(kk)
