const bigdoglist = function(req, res) {
    res.render('bigdogs' , {
        bigdogs:
        [
            {dog:'Agent Pete', name:'Dogson'},
            {dog:'Agent James', name:'Kingsman'},
            {dog:'Agent Mick', name:'Statesman'}

        ]});
};

module.exports = {
    bigdoglist
};