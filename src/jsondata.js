var path = require('path');
var fs = require('fs');
module.exports = {
    getdata: function(file) {
        var jsonfile = path.resolve('./data/json/', file);
        var result = JSON.parse(fs.readFileSync(jsonfile));
        return result;
    }
}