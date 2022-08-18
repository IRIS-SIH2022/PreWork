import pandas as pd
import numpy as np
import subprocess

df = pd.read_csv("data.csv")


def boundaryFilling():
    for i in range(0, len(df)):
        lng = df.loc[i, 'Longitude']
        lat = df.loc[i, 'Latitude']
        # print(lat,lng)
        stationID = checkBoundary(str(lat), str(lng))
        df.loc[i,'StationID'] = stationID
        if(i%1000==0):
<<<<<<< HEAD
          print("1000 added")
          df.to_csv('out.csv')
=======
            print("1000 added")
            df.to_csv('out.csv')
>>>>>>> ac99625d93962c5e9ebe2739194462d404504c6a

def checkBoundary(lat,lng):
  result = subprocess.run(['node', 'boundaryCheck.js',lat,lng], stdout=subprocess.PIPE).stdout.decode('utf-8')
  
  # It is 1 if the point is inside any of the polygon, else it is 0
  if(result[0]!='0'):
    # print('Station ID:',result[2:])
    return result[2:].strip()
  return -1

boundaryFilling()
