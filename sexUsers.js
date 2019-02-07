const {TOKEN} = require('./config');
const api = require('vk-easy');

module.exports = ( userId, sex, get) => api('users.get', { 
    user_ids: userId,
    fields: sex,
    access_token: TOKEN
  }).then(console.log);