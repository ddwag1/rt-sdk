const fetch = require('isomorphic-fetch');



const get = (route, options) => {
    let baseUrl = 'https://svod-be.roosterteeth.com/api'
    
    const defaultVersion = '/v1'
    if (options && options.version) {
        baseUrl += '/v' + options.version    
    } else {
        baseUrl += defaultVersion
    }
    
    //TODO: Add options for order
    //TODO: Add options for page
    //TODO: Add options for per_page
    //TODO: Add hidden options for rootUrl
    //TODO: Think of other shit to add to options    
    
    baseUrl += route
    
    // console.log('Requesting ' + baseUrl);
    return fetch(baseUrl)
}

module.exports = {
    get: get,
}

