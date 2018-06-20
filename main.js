var xlsx = require('node-xlsx').default;
var fs = require('fs');
 
// Parse a file
const workSheetsFromFile = xlsx.parse(`${__dirname}/price.xlsx`);

function createObject(data) {
    var output = {};
    output.price1 = data[0].data[5][3];
    output.price2 = data[0].data[6][3];
    return output;
}

console.log(createObject(workSheetsFromFile));