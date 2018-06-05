
const apiService = require('./src/APIService');

const seasons = seriesSlug => apiService
    .get('/shows/' + seriesSlug + '/seasons?per_page=10', options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data))

const series = () => {
    console.log('series');
}

const recentlyUpdatedSeries = options => apiService //change to series() allow user to filter
    .get('/shows?per_page=11&order=desc') // remove per page add to option, optionss
    .then(res => res.json())
    .then(body => Promise.resolve(body.data))

const season = (seasonSlug, options) => apiService
    .get('/seasons/' + seasonSlug + '/episodes?per_page=100', options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data))

const episode = (episodeSlug, options) => apiService
    .get('/episodes/' + episodeSlug, options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data[0]))

const products = (show_id, options) => apiService
    .get('/shows/' + show_id + '/products', options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data[0].included.collections));

const livestreams = (options) => apiService
    .get('/lives', options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data));

const queryByEpisode = (query, options) => apiService
    .get('/search?query=' + encodeURIComponent(query), options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data.filter(result => result._type === "episode")));
    
    //TODO: handle no results
    
    // https://svod-be.roosterteeth.com/api/v1/featured_products
    
    
module.exports = {
    seasons: seasons,
    series: series,
    recentlyUpdatedSeries: recentlyUpdatedSeries,
    episodes: episodes,
    episode: episode,
    products: products,
    livestreams: livestreams,
    queryByEpisode, queryByEpisode
}