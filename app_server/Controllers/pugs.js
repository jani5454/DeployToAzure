const puglist = function(req, res) {
    res.render('pugs' , {
        pugs:
        [
            {dog:'Derp Dennis', name:'Pugson'},
            {dog:'Derp Charlie', name:'Charming'},
            {dog:'Derp Mac', name:'Magnificent'}

        ]});
};

module.exports = {
    puglist
};