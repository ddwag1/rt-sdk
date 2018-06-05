# rt-sdk

[![npm version](https://badge.fury.io/js/rt-sdk.svg)](https://badge.fury.io/js/rt-sdk)

The rt-sdk is a simple little wrapper for Company X's APIs.

You can request things like:
  - series
  - episodes
  - livestreams
  - search results
  - products
  - and many more stuffz!

# Get started!
- Run `yarn add rt-sdk` in the root of your project. (This will add `rt-sdk` to your `package.json`)
```js
const rt = require('rt-sdk');
```
- Use one of the available methods listed below to start building!
> Remember that all `rt-sdk` methods return a [Promise()](https://developers.google.com/web/fundamentals/primers/promises)
### Get all seasons of a specific show
rt.seasons() takes a show slug
```js
rt.seasons('rt-podcast')
    .then(seasons => {
        for (let season of seasons) {
            console.log(season.attributes.title);
        }
    });
```

### Get all episodes of a specific season
rt.season() takes a season slug
```js
rt.season('always-open-2018')
    .then(episodes => {
        for (let episode of episodes) {
            console.log(episode.attributes.title);
            console.log(episode.attributes.description);
            console.log(episode.attributes.number);
        }
    });
```

# In progress.. More coming soon!