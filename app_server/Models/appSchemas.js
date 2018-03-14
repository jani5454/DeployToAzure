const mongoose = require('mongoose');

const rulesSchema = new mongoose.Schema({number:String, term:String});
const bigdogsSchema = new mongoose.Schema({dog:String, name:String});
const pugsSchema = new mongoose.Schema({dog:String, name:String});


mongoose.model('rules', rulesSchema);
mongoose.model('bigdogs', bigdogsSchema);
mongoose.model('pugs', pugsSchema);

