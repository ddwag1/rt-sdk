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

### Get a specific episode
rt.episode() takes an episode slug
```js
rt.episode('lets-play-2012-16')
    .then(episode => {
        console.log(episode.attributes.show_title);
        console.log(episode.attributes.title); 
        console.log(episode.attributes.description);
        console.log(episode.included.images);
    });
```

### Get all products of a specific show
rt.products() takes a show slug (and `options`). If there isn't a specific product collection associated with the show it will return generic products;
```js
rt.products('cow-chop-gaming')
    .then(products => {
        for (let product of products) {
            console.log(product.title);
            console.log(JSON.stringify(product.body_html));
            console.log(product.image.src);
            console.log(product.url);
        }
    });
```

### Get all upcoming (or in progress) livestreams
rt.livestream() only takes the optional `options` obj.
```js
rt.livestreams()
    .then(episodes => {
        for (let episode of episodes) {
            console.log(episode.attributes.title); 
            console.log(episode.type); 
            console.log(episode.attributes.description);
            console.log(episode.included.images);
        }
    });
```

### Get all series
rt.series() only takes the optional `options` obj.
```js
rt.series()
    .then(episodes => {
        for (let episode of episodes) {
            console.log(episode.attributes.title); 
            console.log(episode.type); 
            console.log(episode.attributes.description);
            console.log(episode.included.images);
        }
    });
```

# In progress.. More coming soon!