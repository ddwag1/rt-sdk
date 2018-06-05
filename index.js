
const apiService = require('./src/APIService');

const seasons = (seriesSlug, options) => apiService
    .get('/shows/' + seriesSlug + '/seasons?per_page=10', options)
    .then(res => res.json())
    .then(body => Promise.resolve(body.data))

const series = options => apiService
    .get('/shows', options)
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
    
    //TODO: handle no results and reject()    
    
module.exports = {
    seasons: seasons,
    series: series,
    season: season,
    episode: episode,
    products: products,
    livestreams: livestreams,
    queryByEpisode, queryByEpisode
}