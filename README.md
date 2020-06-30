# Challenge

## To run

1. Unzip the folder and run `npm i` or `yarn` to install dependencies
2. Run `npm run server-dev` or `yarn server-dev` to start server
3. Run `npm run react-dev` or `yarn react-dev` to transpile and bundle the front end app
4. Visit http://localhost:3000
5. You should see a quick loading status and then the view of one of the candidates
6. Click the Switch View button to toggle between the candidates

## Real time updates:

I couldn't make time to implement this feature but this is the way I'd have implemented.

I would have created a new component that receives the twitter handle of the candidate and the latest tweet id we have.
Using useEffect with empty array as a second argument (getting a componentDidMount functionality) I would set a setInterval that will ping the server every minute and send these 2 props along. I would return a function with clearInterval to avoid this from running unnecessarily.
In the server I would query the 10 latest tweets (same as I'm already doing with the current endpoint) and verify if the tweet id is also the latest tweet from twitter if not I would get the latest tweets by looping through the array and getting those tweets that are before the id gets matched with the Id sent from front-end.
If the id is on the first tweet that means there are no new tweets so I would return an empty array or an object with succes false.
This component would go inside TweetView after we have verified that the user exists, because at this point we have all we need to trigger the functionality.
the component will update the store with another saga and will show a button to display the latest tweets.

## Side notes:

I actually didn't configure babel and webpack before most of the time I worked with solutions that come with that config done like `create-react-app`, `gatsby` or `expo`.
Also was my first time implementing `redux-saga`, I've use `redux-thunk` on personal projects that you can check on my github. Hopefully the implemention is acquarate enough.

Thank you for the challenge!