/**
 * Created by bopang on 21/05/15.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text : String,
    done : Boolean
});