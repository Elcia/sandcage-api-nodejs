/**
 * Created by vedi on 30/10/2016.
 */

'use strict';

const Sandcage = require('..');

const sandcage = new Sandcage('[YOUR SANDCAGE API KEY]');
const payload = {
  page: 1,
  'results_per_page': 10
};

sandcage
  .listFiles(payload)
  .then((result) => {
    console.log(result);
  });