# PNS-PS7-20-21-SD-WIA-2
## Description
- The full-time PS7 project is carried out during the three weeks.
- The project consists of two axes including
	- **Data Sciences** : Building a chatbot which are able to answer the end users the questions about activities, emplacements, etc. as part of the Polyville project
	- **Web and Artifical Intelligence** : Modeling and Implemention of a database which involves the models design for different types of data or identifying existing models that will need to be reused, ensuring the interoperability of these models and the possibilities of efficient processing.
- The final product is a web application integrated with developed chatbot which is dedicated for PolyVille civilians or people who want to get knowing about activities, emplacements, etc. at PolyVille.
- Our chatbot was based on by DialogFlow being a NLU platform developed by Google in order to make easy and integrate into multiple kind of applications. 
- The chatbot based on our database which is stored in MongoDB, a document type database, to give the appropriate answer according to the user intent detection was done by DialogFlow.
We have integrated also multiple kind of API like OpenStreetMap, WeatherAPI in the backend side in order to get some real time data such as traffic data or current weather data and send it back to the user via the chatbot.
The chatbot have also capability to recongnize the context while having conversation with the user which mean that it can implicitly understand what people mention about, allthough it is not explicitly explained.
- In the last second week of project, we have designed a semantic database which allows our system capturing more informations and more meaningful on a given data. This one could help us execute the more complex queries and also improve the interoperability of these models and the possibilities of efficient processing.

## Technologies used

### Chatbot
- DialogFlow

### Frontend
- VueJS

### Backend
- NodeJS
- MongoDB
- OpenRouteService API
- GeoGouv API
- Mocha + Chai Testing

### Data processing
- Python
- Pandas
- Numpy

### Deploying
- Docker

## Chatbot starter
Our chatbot was extracted as zip file and located in chatbot folder. You are free to reuse our chatbot by implement the follow steps:
- Login to [DialogFlow](https://dialogflow.cloud.google.com/) using your Google account 
- Create new chatbot
- Import zip file you have downloaded above

## Backend starter
In order to simplify the setup backend environment, we have used Docker to deploy our product.
You need to implement the following steps 
- Install [Docker](https://docs.docker.com/desktop/)
- Access to backend folder and run command

> docker-compose up --build

Once the required containers have build and the backend environment have been setup and ready to use which is included
- MongoDB setup
- NodeJS setup which is connected to MongoDB
- Ngrok setup which forward NodeJS address to public address in order to establish the communication between DialogFlow and the backend

You need to tell with DialogFlow that which service address it have to connect to by following the steps
- Go to localhost:4040 and copy the ngrok public address
- Go to DialogFlow page and paste this address to DialogFlow Fulfillment address

Your chatbot and the backend have now successfully connected and ready to use.

## Frontend starter
Go to DialogFlow and copy the integration DialogFlow chatbot snippet code and paste into the frontend. 
Your chatbot have now successfully integrated to the frontend and ready to use.