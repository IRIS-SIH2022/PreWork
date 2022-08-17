import pandas as pd
import numpy as np
import subprocess

df = pd.read_csv("data.csv")


def boundaryFilling():
    for i in range(0, len(df)):
        lng = df.loc[i, 'Longitude']
        lat = df.loc[i, 'Latitude']
        # print(lat,lng)
        checkBoundary(str(lat), str(lng))

def checkBoundary(lat,lng):
  result = subprocess.run(['node', 'boundaryCheck.js',lat,lng], stdout=subprocess.PIPE).stdout.decode('utf-8')
  print(result)
boundaryFilling()
