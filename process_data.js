const fs = require('fs');
const csv = require('csvtojson');
const stream = require('stream');

const dataDir = `${__dirname}/_data`;
const railDir = `${dataDir}/rail_data`;

 //TODO: add a clean step
fs.readdir(railDir, (err, files) => {
  // console.log('FILES', files);

  // files.forEach((file, index) => {
    // const filePath = `${railDir}/${file}`;
    const filePath = `${railDir}/agency.txt`;
    // const newFile = `${__dirname}/server/data/rail/${file.replace('.txt', '.json')}`;
    const newFile = `${__dirname}/server/data/rail/agencyTest.json`;
    // console.log('NEW FILE', file, newFile);
    // const stats = fs.lstatSync(filePath);
    const newFileStream = fs.createWriteStream(newFile, {defaultEncoding: 'UTF-8', objec});


    csv()
    .fromFile(filePath)
    .on('json', (jsonObj) => {
      console.log('agency -> ', jsonObj)
      newFileStream.write(jsonObj);
      newFileStream.cork();
    })
    .on('done', (err) => {
      console.log('err', err)
      newFileStream.finish();
    })
  // });
});
