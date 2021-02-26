import pandas as pd
import numpy as np
import config
import random

def build_dataset(pathname, category):
    df = pd.read_csv(pathname, header=None, sep='[:,|_]', delimiter=';', nrows=1000) 

    ## Ignore the first index row
    new_header = df.iloc[0] #grab the first row for the header
    df = df[1:] #take the data less the header row
    df.columns = new_header #set the header row as the df header

    # data processing
    # Activity - event
    if category=="event":
        df = df[df['Date début'] > '2021-01-01'] # filter and take only events starting in year 2021
        # Split latlon to 2 comlumn X and Y
        # X : Longitude
        # Y : Latitude
        df[['Y','X']] = df.latlon.str.split(",", expand=True,)
        df = df.drop(columns=['uid', 'Image', 'Vignette', 'latlon', 'Share Url', 'Mots clés', 'timetable', 'Program Uid', 'Date mise à jour', 'Quartier']) # ignore unused columns
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value

        # rename columns
        df = df.rename(columns={
            "X" : "long",
            "Y" : "lat",
            "Lien": "website", 
            "Informations pratiques": "practical_information", 
            "Langue": "language", 
            "Titre": "title", 
            "Description": "description", 
            "Détails": "detail", 
            "Place": "location", 
            "Adresse": "address", 
            "Département": "departement", 
            "Région": "region", 
            "Ville": "city", 
            "Date début": "start_date", 
            "Date de fin": "end_date", 
            "Tarif": "price", })

        rnd = random.Random()
        evt_type = []
        for i in range(len(df.index)):
            evt_type.append(rnd.choice(['commercial', 'cultural', 'sport']))
            
        df['type'] = evt_type
        # export to csv dataset
        df.to_csv(config.DATA_SET_EVENT_FILE_PATH, sep=';')
        # dataframe info
        print("Event data info: ")
        print(df.info())

    # Emplacement - cinema
    if category=="cinema":
        df = df.drop(columns=['osm_id', 'ref_cnc', 'marque', 'open_air', 'drive_in', 'cinema3d', 'acoustic', 'facebook', 'wikidata', 'siret']) # ignore unused columns
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value

        # rename columns
        df = df.rename(columns={
            "X" : "long",
            "Y" : "lat",})

        # export to csv dataset
        df.to_csv(config.DATA_SET_CINEMA_FILE_PATH, sep=';')
        # dataframe info
        print("Cinema data info: ")
        print(df.info())

    # Emplacement - restaurant
    if category=="restaurant":
        df = df.drop(columns=['osm_id', 'operator', 'brand', 'capacity', 'drive_through', 'wikidata', 'brand_wikidata', 'siret', 'facebook']) # ignore unused columns
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value

        # rename columns
        df = df.rename(columns={
            "X" : "long",
            "Y" : "lat",})

        # export to csv dataset
        df.to_csv(config.DATA_SET_RESTAURANT_FILE_PATH, sep=';')
        # dataframe info
        print("Restaurant data info: ")
        print(df.info())


    # Emplacement - library
    if category=="library":
        # TODO
        df = df.drop(columns=['osm_id', 'ref_isil', 'operator']) # ignore unused columns

        # export to csv dataset
        df.to_csv(config.DATA_SET_LIBRARY_FILE_PATH, sep=';')
        # dataframe info
        print("Library data info: ")
        print(df.info())
    # Emplacement - sport_center
    if category=="sport_center":
        # TODO
        df = df.drop(columns=['type', 'osm_id', 'operator']) # ignore unused columns
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value

        # rename columns
        df = df.rename(columns={
            "X" : "long",
            "Y" : "lat",})

        # export to csv dataset
        df.to_csv(config.DATA_SET_SPORT_CENTER_FILE_PATH, sep=';')
        # dataframe info
        print("Sport center data info: ")
        print(df.info())
    # Location - city
    if category=="city":
        # TODO
        df = df.drop(columns=['country', 'iso2', 'capital', 'population', 'population_proper']) # ignore unused columns
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value

        # rename columns
        df = df.rename(columns={
            "lng" : "long",
            "lat" : "lat",
            "city": "name",
            "admin_name": "department"})
        
        # export to csv dataset
        df.to_csv(config.DATA_SET_CITY_FILE_PATH, sep=';')
        # dataframe info
        print("City data info: ")
        print(df.info())
    # Location - country
    if category=="country":
        # TODO
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value

        # rename columns
        df = df.rename(columns={
            "longitude" : "long",
            "latitude" : "lat",})
        
        # export to csv dataset
        df.to_csv(config.DATA_SET_COUNTRY_FILE_PATH, sep=';')
        # dataframe info
        print("Country data info: ")
        print(df.info())
    # People - user
    if category=="user":
        df = df[df.columns.dropna()]    # drop nan columns
        df = df.replace(np.nan, 'null') # replace empty cell to null value
        # export to csv dataset
        df.to_csv(config.DATA_SET_USER_FILE_PATH, sep=';')
        # dataframe info
        print("User data info: ")
        print(df.info())


# build dataset

# Activity 
build_dataset(config.RAW_EVENT_FILE_PATH, "event")

# Emplacement
#build_dataset(config.RAW_CINEMA_FILE_PATH, "cinema")
#build_dataset(config.RAW_RESTAURANT_FILE_PATH, "restaurant")
#build_dataset(config.RAW_LIBRARY_FILE_PATH, "library")
#build_dataset(config.RAW_SPORT_CENTER_FILE_PATH, "sport_center")

# Location
#build_dataset(config.RAW_CITY_FILE_PATH, "city")
#build_dataset(config.RAW_COUNTRY_FILE_PATH, "country")

# People
#build_dataset(config.RAW_USER_FILE_PATH, "user")
