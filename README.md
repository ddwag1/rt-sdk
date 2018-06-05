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
rt.seasons() takes a show slug.
```js
const options = {
    version: 1,
    order: 'desc',
    per_page: '10'
}

rt.seasons('rt-podcast', options)
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
rt.episode() takes an episode slug.
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
    .then(series => {        
        for (let serie of series) {
            console.log(serie.attributes.title); 
            console.log(serie.type); 
            console.log(serie.attributes.slug);
            console.log(serie.attributes.summary);
        }
    });
```

### Search Episodes
rt.queryByEpisode()  takes a episode query (and `options`).
```js
rt.queryByEpisode('Mark Nutt')
    .then(episodes => {
        for (let episode of episodes) {
            console.log(episode.attributes.title); 
            console.log(episode.type); 
            console.log(episode.attributes.slug);
        }
    });
```

# In progress.. More coming soon!
- Tests to make sure I dont break yer shit
- TypeScript Typings
- Options Obj (order, per_page, page)
- Featured Products
- Scope options
- Schedule
- All Channels
- All Series in a Channel
- All Episodes in a Channel
- Featured Items in a Channel
- Featured Products in a Channel
- Show Episodes by Bulk
- Related Series
- Season Images
- Episode Images
- Episode Videos
- Query by Series
- List of all Genres
- Bonus Features?
- Marketing Banners..? ¯\_(ツ)_/¯ 

