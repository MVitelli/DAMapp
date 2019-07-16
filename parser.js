var fs = require('fs');

fs.readFile(process.cwd() + "//internos-limpios.csv", function (err, data) {
  if (err) throw err;

  var values = data.toString().split('\n')
  //The first row contains the keys so i have to remove it 
  var keys = values.shift().split(';')
  var keysLength = keys.length
  values = values.map(function (value) {
    splited = value.split(';')
    let json = {}
    for (let i = 0; i < keysLength; i++) {
      json[keys[i]] = splited[i]
    }
    return json
  });

  let json = JSON.stringify(values);

  fs.writeFile('internos.json', json, (err) => {
    if (err) throw err;
    console.log('The json file has been saved');
  });

});
