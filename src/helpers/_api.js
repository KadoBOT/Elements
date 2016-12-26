import axios from 'axios'

import './css/loader.css'

let call = 0

const createLoader = () => {
  if(call === 0) {
    document.documentElement.style.overflow = 'hidden';
    const node = document.createElement('div')
    node.id = 'loader'
    const spinner = document.createElement('div')
    node.appendChild(spinner)
    spinner.className = 'spinner'
    const innerNode =  document.createElement('div')
    const innerNode2 =  document.createElement('div')
    innerNode.className = 'dot1'
    spinner.appendChild(innerNode)
    innerNode2.className = 'dot2'
    spinner.appendChild(innerNode2)
    document.body.appendChild(node)
  }
}

const removeLoader = () => {
  if(call === 0) {
    document.documentElement.style.overflow = 'auto';
    document.getElementById('loader').remove();
  }
}

const instance = axios.create({
  baseURL: 'https://recruitment.elements.nl:8080/v1/',
  headers: {
    'Authorization': 'Token 76df6bcbcc165a9d512ef5bb2599c9c4252c1427',
  }
});

instance.interceptors.request.use(config  => {
  createLoader()
  call = call++
  return config;
}, error => {
  createLoader()
  call = call--
  return Promise.reject(error);
});

instance.interceptors.response.use(response => {
  call = call++
  removeLoader()
  return response;
}, error => {
  call = call--
  removeLoader()
  return Promise.reject(error);
});

export default instance
