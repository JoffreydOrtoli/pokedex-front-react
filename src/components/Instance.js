const axios = require('axios');

const Instance = axios.create({
    baseURL: 'http://localhost:9999/',
});

axios.interceptors.request.use(function (request) {
    if (401 === request.status) {
        console.log("reco toi frerot");
    }
    return request;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

//we intercept every response
Instance.interceptors.response.use((response) =>{
    if (401 === response.status) {
        console.log("reco toi frerot");
    }
    return response;
}, error => {
//check for authentication or anything like that
    return Promise.reject(error)
})

export default Instance;