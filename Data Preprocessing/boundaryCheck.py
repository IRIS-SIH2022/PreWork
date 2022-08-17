import pandas as pd
import numpy as np
import subprocess

df = pd.read_csv("bigData.csv")


def boundaryFilling():
    for i in range(0, len(df)):
        lng = df.loc[i, 'Longitude']
        lat = df.loc[i, 'Latitude']
        # print(lat,lng)
        checkBoundary(str(lat), str(lng))

def checkBoundary(lat,lng):
  result = subprocess.run(['node', 'boundaryCheck.js',lat,lng], stdout=subprocess.PIPE).stdout.decode('utf-8')
  
  # It is 1 if the point is inside any of the polygon, else it is 0
  if(result[0]!='0'):
    print('Station ID:',result[2:])
boundaryFilling()
