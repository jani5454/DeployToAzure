const index = function(req, res) {
    res.render('index', { title: 'Top Secret Dog Database' });
}
module.exports = {
    index
}