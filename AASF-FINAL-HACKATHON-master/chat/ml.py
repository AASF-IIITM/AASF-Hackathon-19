import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from flask import Flask, request, jsonify
import pickle
import json

app=Flask(__name__)


@app.route("/")
def index():
    return "Flask Server"

@app.route("/postdata",methods=['POST'])
def postdata():
    data=request.get_json()
    print(data)

   

    for key,value in data.items():
        
        recommendations(value)
    
    return json.dumps(recommended_movies)



if __name__=="__main__":
    app.run(host='127.0.0.1',port=5000)
