var mongoose = require('mongoose')

var Blog = mongoose.Schema({
number: {
    type: Number
},
date: {
    type: Date
},
link: {
    type: String
},
title: {
    type: String
},
description: {
    type: String
}
});

module.exports = mongoose.model("Blog", Blog)