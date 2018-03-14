db.dropDatabase();

db.pugs.save(
    [
        {dog:'Derp Dennis', name:'Pugson'},
        {dog:'Derp Charlie', name:'Charming'},
        {dog:'Derp Mac', name:'Magnificent'}
    ]
);


db.rules.save(
    [
        {number:'1', term:'Do not talk about Top Secret Dog Database'},
        {number:'2', term:'Do not talk about Top Secret Dog Database'},
        {number:'3', term:'Do not talk about Top Secret Dog Database'},
        {number:'4', term:'Do not talk about Top Secret Dog Database'},
        {number:'5', term:'Do not talk about Top Secret Dog Database'},
        {number:'6', term:'Do not have fun here...'},
        {number:'7', term:'If you break these rules watch out for your dog......'}
    ]
);

db.bigdogs.save(
    [
        {dog:'Agent Pete', name:'Dogson'},
        {dog:'Agent James', name:'Kingsman'},
        {dog:'Agent Mick', name:'Statesman'}
    ]
)