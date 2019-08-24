const axios = require('axios');

const getProducts = ()=>axios.get('http://www.mocky.io/v2/5cd2bb7631000086283399be?%20mocky-delay=5000ms')

export default ({
  getProducts,
})