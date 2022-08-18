import geopy

from geopy.geocoders import Nominatim
from geopy.extra.rate_limiter import RateLimiter

import pandas as pd
import numpy as np

geolocator = Nominatim(user_agent='sih')

geocode = RateLimiter(geolocator.geocode, min_delay_seconds=0,
                      return_value_on_exception=None)

def getLatLng(address):
  location = geocode(address)
  return location


df = pd.read_csv("data.csv")
def addLatLng():
    for i in range(0, len(df)):
      #get the column
        address = df.loc[i, 'Address']
        location = getLatLng(address)
        # print(location)
        df.loc[i,'Latitude'] = location.latitude
        df.loc[i,'Longitude'] = location.longitude
        if(i%300==0):
          print(i," added")
          df.to_csv('out.csv')

addLatLng()