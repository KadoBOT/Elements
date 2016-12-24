import axios from 'axios'

export default axios.create({
  baseURL: 'https://recruitment.elements.nl:8080/v1/',
  headers: {
    'Authorization': 'Token 76df6bcbcc165a9d512ef5bb2599c9c4252c1427',
  }
});
