import axios from 'axios'; 

/**
 * Takes payload and urlencodes it to ensure request is properly sent 
 * @param   {any} data request payload
 * @returns {any} urlencoded payload
 */
function urlEncode(data) {
    var urlEncodedString = "";
    Object.keys(data).forEach(function(key) {
        urlEncodedString += key + "=" + encodeURIComponent(data[key]) + "&";
    });
    return urlEncodedString.slice(0, -1); //remove the trailing '&'
}

/**
 * Helper function that uses axios to make a GET HTTP Request to the requested url and returns a promise with the response data
 *
 * @param   {string} url path of request to our server. e.g url = "/add-todo" would send a get request to the add-todo route in our server 
 * @returns {Promise} Promise that resolves the data; can be accessed with get(url).then(resp => callBackFunc()) in which the callback function
 * takes in resp as a parameter and the server data can be accessed with resp.data
 */
export function get(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(resp => {
            resolve(resp.data); 
        }).catch(err => {
            reject(err); 
        })
    })
}

/**
 * Helper function that uses axios to make a POST HTTP Request to the requested url with the payload and returns a promise with the response data
 *
 * @param   {string} url path of request to our server. e.g url = "/add-todo" would send a get request to the add-todo route in our server 
 * @param   {any} data request payload
 * @returns {Promise} Promise that resolves the data; can be accessed with post(url, data).then(resp => callBackFunc()) in which the callback function
 * takes in resp as a parameter and the server data can be accessed with resp.data
 */
export function post(url, payload) {
    return new Promise((resolve, reject) => {
        axios.post(url, urlEncode(payload)).then(resp => {
            resolve(resp.data); 
        }).catch(err => {
            reject(err); 
        })
    })
}