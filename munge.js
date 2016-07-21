var fs = require('fs');
var stats = require('./raw/population-stats-by-county.json');
var mappings = require('./raw/fips-county-codes.json');

mappings = mappings.reduce(function(mapped, row) {
  mapped[row[1] + '-' + row[2]] = {
    state: row[0],
    county: row[3]
  };
  return mapped;
}, {});


var keys = stats.shift();
var statsObjects = stats.map(function(row) {
  mappingKey = row[row.length - 2] + '-' + row[row.length - 1];
  var data = row.reduce(function(mapped, value, i) {
    mapped[keys[i]] = parseInt(value);
    return mapped;
  }, {});

  mapping = mappings[mappingKey];
  data.stateName = mapping.state;
  data.countyName = mapping.county;

  return data;
});

console.log(statsObjects[0]);


fs.writeFileSync('formatted/population-data.json', JSON.stringify(statsObjects, null, 2));
