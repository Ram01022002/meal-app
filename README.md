# meal-app
# Installation: 

To run the app, clone the repo and in the root folder, run an npm i.
Then in the react-ts-meals folder, run npm i.
This will install all the packages required to run the app. Post that run npm start in the root folder to run the server and run npm start in the react-ts-meals folder to run the client.
You will be able to see the react app in localhost 3000.


# Functionalities: 

This react app has two section, in the left section it has pills and the cards which contain the details of the meals. In the right section it contains the price visibility of the orders. 
Pills: There are filters at the top of the page where you can select the type of meals required. I have also ensured that when we click on any of the sub filters the selection from all is removed and when clicked on all the selection from other sub filters is removed.

Card: Each card has a starter, dessert and other data. Along with it, we also have drinks section which has pills based on the availability of drinks for each section. When any of the pills in selected, the price of the dish automatically gets updated and hence we can see the sum the price of the dish and the price of the drink.

Price Section: In the right we can see the price section, where when the user click on select in any of the cards, the price gets updated and hence the used can order the dish based on it. The functionality of ordering was still unclear in the requirement doc, hence has not been implemented.

# APIs:
There are two apis
The pills api fetches all the pills/filters
The meals api fetches the data of all the meals.


Once all the meals are fetched then we filter at the client side so as to decrease the number of fetches. This is similar to what google uses where they fetch the emails data in the initial fetch and then they keep filtering on the client side. This might increase the time of load for first time but the corresponding renders doesnot require any network calls.


