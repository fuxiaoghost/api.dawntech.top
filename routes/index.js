var jsondata = require('../src/jsondata');
exports.cycle = function(req, res) {
    var result = jsondata.getdata('home_cycle.json');
    res.json(result);
}

exports.photos = function(req, res) {
    var result = jsondata.getdata('photos.json');
    res.json(result);
}
exports.photo = function(req, res) {
    var category = req.params.category;
    var result = jsondata.getdata('photos.json');
    for (var i = 0; i < result.items.length; i++) {
        var item = result.items[i];
        if (item.category === category) {
            res.json({items: item.photos});
            break;
        }
    }
}