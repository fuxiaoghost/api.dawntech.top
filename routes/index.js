var jsondata = require('../src/jsondata');
var weixin = require('../src/weixin');
exports.cycle = function(req, res) {
    var isMobile = req.query.isMobile;
    if (isMobile === 'true') {
        var result = jsondata.getdata('home_cycle_m.json');
        res.json(result);   
    }else {
        var result = jsondata.getdata('home_cycle.json');
        res.json(result);
    }
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
exports.caegories =  function(req, res) {
    var result = jsondata.getdata('home_items.json');
    res.json(result);
}
exports.knbrush = function(req, res) {
    var result = jsondata.getdata('knbrush.json');
    res.json(result);
}
exports.note = function(req, res) {
    var result = jsondata.getdata('note.json');
    res.json(result);
}
exports.blogs = function(req, res) {
    var result = jsondata.getdata('blog.json');
    res.json(result);
}

// 微信
exports.weixinSignature = function(req, res) {
    var url = req.query.url;
    weixin.signature(res, 0, url);
}