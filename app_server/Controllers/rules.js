const rulelist = function(req, res) {
    res.render('rules' , {
        rules:
        [
            {number:'1', term:'Do not talk about Top Secret Dog Database'},
            {number:'2', term:'Do not talk about Top Secret Dog Database'},
            {number:'3', term:'Do not talk about Top Secret Dog Database'},
            {number:'4', term:'Do not talk about Top Secret Dog Database'},
            {number:'5', term:'Do not talk about Top Secret Dog Database'},
            {number:'6', term:'Do not have fun here...'},
            {number:'7', term:'If you break these rules watch out for your dog......'}

        ]});
};

module.exports = {
    rulelist
};