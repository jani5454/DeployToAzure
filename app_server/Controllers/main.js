const index = function(req, res) {
    res.render('index', { title: 'Antoniou' });
}
module.exports = {
    index
}