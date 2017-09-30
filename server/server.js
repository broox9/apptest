const express = require('express');
const server = express();
const path = require('path');

require('../process_data.js');

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/index.html'))
})

server.listen(3003, () => {
  console.log('NJT Scheduler Running on 3003');
})
