var jsondata = require('../src/jsondata');
exports.cycle = function(req, res) {
    var result = jsondata.getdata('home_cycle.json');
    res.json(result);
}