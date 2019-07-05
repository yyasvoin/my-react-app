'use strict';

const fetch = require('node-fetch');


module.exports = function getFlightNumber() {
  return fetch('https://api.spacexdata.com/v3/launches/latest')
    .then(response => response.json())
    .then(latest => latest.flight_number);
};
