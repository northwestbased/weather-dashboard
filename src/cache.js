const APIFORECASTURL = 
  "https://api.apixu.com/v1/forecast.json?key=0fc0ae0803da49dcb0635653162812"
const TWOMINUTES = 120

let Cache = {
  cache: new Map(),
  get: function(key) {
    let currenttime = Math.round((new Date()).getTime() / 1000);
    let r = this.cache.get(key)
    if (r && (r.time < currenttime + TWOMINUTES)) {
      return new Promise(function(resolve, reject) {
        resolve(r.data);
      });
    }
    return fetch(`${APIFORECASTURL}&q=${key}&days=7`)
      .then(res => res.json())
      .then(response => {
        this.cache.set(key, {data:response, time:currenttime})
        return response
      })
      .catch(error => console.error('Error:', error));
  }
}

export default Cache
