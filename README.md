#Buildit Code Challenge

[Github-repo](https://github.com/hilvitzs/buildit) |
[Hosted Site](https://sh-buildit.herokuapp.com/)

#Instructions
### To Start
- To run this application locally, git clone [https://github.com/hilvitzs/buildit](https://github.com/hilvitzs/buildit).
-  Run npm install
-  Run npm start
-  A new tab should open at site [localhost:3000](localhost:3000)


## To Build
- Run npm run build

### To Test
-  Run npm test

#Thought Process
While creating this app, I tried to come up with a simple, yet visually pleasing interface to display five day weather data. It was a nice surprise to receive not just 5 days of weather data, but updates for every three hours, throughout the day. I wanted people to be able to get the important information at a glance (date, high and low temperatures) but then have the ability to get more detailed information should they hover over the day.

I used Create-React-App, and then ended up ejecting it in order to add in the Enzyme test language. I think that Create-React-App is a great starting point for getting up and running when I would rather spend more time on custom functionality. Ejecting allowed me to add in aspects that were not included much more quickly than starting a React app from scratch. That is, however, a trade off that I chose to make. If I were to continue working on the application, I would probably clean up the package.json and make it a little bit more custom to my needs.

I think this application was a great use case for React as there are defined components that need specific information. Why have to create a whole bunch of html when I can create a single component and reuse that over and over again depending on how much data is returned.

I chose to leave Redux out of this application because I did not think there was enough data to necessitate the use of a state manager beyond React's built in state.

There are certainly changes that I would like to make given the chance. While the design is alright, I would like to add some other aspects that make it look a little bit more polished. I would probably standardize the response and clean the data a little bit more in order to better display more information for the user.

This API recommended using the city id rather than a zip code. I only allow users to enter their zip code in order to get weather information. The API is a little bit different in that you need to have different url's in order to search by city. I would definitely use either switch statements or some if..else statements in order to allow people to search by city and zip code. I would also then send the responses back to the API in order to get the city id and the most specific information.

Thank you for the challenge. I really appreciate any feedback, especially things that I could implement better.