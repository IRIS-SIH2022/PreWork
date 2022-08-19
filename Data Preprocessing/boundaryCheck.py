import pandas as pd
import numpy as np
import subprocess

df = pd.read_csv("data2.csv")


def boundaryFilling():
    for i in range(0, len(df)):
        lng = df.loc[i, 'lng']
        lat = df.loc[i, 'lat']
        # print(lat,lng)
        stationID = checkBoundary(str(lat), str(lng))
        df.loc[i,'StationID'] = stationID
        if(i%1000==0):
            print(f"{i} * 1000 added; {100000-i} left")
            df.to_csv('out.csv')

def checkBoundary(lat,lng):
  result = subprocess.run(['node', 'boundaryCheck.js',lat,lng], stdout=subprocess.PIPE).stdout.decode('utf-8')
  
  # It is 1 if the point is inside any of the polygon, else it is 0
  if(result[0]!='0'):
    # print('Station ID:',result[2:])
    return result[2:].strip()
  return -1

boundaryFilling()
