const mongoose = require('mongoose');

mongoose.Promise - global.Promise
mongoose.connect('mongodb://localhost/loja', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


module.exports = mongoose;
