import pandas as pd
import numpy as np
import subprocess

<<<<<<< HEAD
df = pd.read_csv("nw1.csv")
=======
df = pd.read_csv("data2.csv")
>>>>>>> 9f3e5a35e8d1aea149baaeb809880fad094bda8b


def boundaryFilling():
    for i in range(0, len(df)):
        lng = df.loc[i, 'lng']
        lat = df.loc[i, 'lat']
        # print(lat,lng)
        stationID = checkBoundary(str(lat), str(lng))
        df.loc[i,'StationID'] = stationID
<<<<<<< HEAD
        if(i%100==0):
            print(i," added")
            df.to_csv('nw1Out.csv')
        df.to_csv('nw1Out.csv')
=======
        if(i%1000==0):
            print(f"{i} * 1000 added; {100000-i} left")
            df.to_csv('out.csv')
>>>>>>> 9f3e5a35e8d1aea149baaeb809880fad094bda8b

def checkBoundary(lat,lng):
  result = subprocess.run(['node', 'boundaryCheck.js',lat,lng], stdout=subprocess.PIPE).stdout.decode('utf-8')
  
  # It is 1 if the point is inside any of the polygon, else it is 0
  if(result[0]!='0'):
    # print('Station ID:',result[2:])
    return result[2:].strip()
  return -1

boundaryFilling()
