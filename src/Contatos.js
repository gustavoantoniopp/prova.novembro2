const axios = require('axios')

function getData(){
    axios.get('http://localhost:8080/contato/')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
}

getData()
module.exports = {getData}