const axios = require('axios');

let configured = false;
let baseUrl = '';
let refreshUrl = '';
let timeOutMS = '6000';
let refreshTokenResponsePath = 'refreshToken';
let accessTokenResponsePath = 'accessToken';

const configure = function configure(configs){
    
}

module.exports = {
    configure
}