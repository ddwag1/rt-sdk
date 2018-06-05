const fetch = require('node-fetch');



const get = (route, options) => {
    let baseUrl = 'https://svod-be.roosterteeth.com/api'
    
    const defaultVersion = '/v1'
    if (options && options.version) {
        baseUrl += '/v' + options.version    
    } else {
        baseUrl += defaultVersion
    }
    
    baseUrl += route
    
    console.log('Requesting ' + baseUrl);
    return fetch(baseUrl)
}

module.exports = {
    get: get,
}

