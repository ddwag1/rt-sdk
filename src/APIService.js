const fetch = require('isomorphic-fetch');



const get = (route, options) => {
    let baseUrl = 'https://svod-be.roosterteeth.com/api'
    
    const defaultVersion = '/v1'
    if (options && options.version) {
        baseUrl += '/v' + options.version    
    } else {
        baseUrl += defaultVersion
    }
    
    baseUrl += route
    
    if (options && options.order) {
        // desc vs asc
        //
    }
    
    if (options && options.per_page) {
        baseUrl += '&per_page=' + options.per_page
    }
    
    // if per page
    
    
    // if page
    
    // if rooturl
    
    
    //TODO: Add options for order
    //TODO: Add options for page
    //TODO: Add options for per_page
    //TODO: Add hidden options for rootUrl
    //TODO: Think of other shit to add to options    
    
    // pay only?
    
    // console.log('Requesting ' + baseUrl);
    return fetch(baseUrl)
}

module.exports = {
    get: get,
}

