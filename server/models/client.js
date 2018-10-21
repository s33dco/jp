const mongoose = require('mongoose');

let Client = mongoose.model('Client', {
  companyName : {
    type      : String,
    trim      : true
    },
  email       : {
    type      : String,
    required  : true,
    minLength : 5,
    trim: true
    },
  phone       : {
      number  : String,
      trim    : true,
      required: true
    },
  contactName : {
      name    : String,
      required: true
    },
  address1    : {
      name    : String,
      required: true
    },
  address2    : {
      name    : String,
      required: true
    },
  townCity    : {
    name      : String,
    required  : true
    },
  postcode    : {
      name    : String,
      required: true
    }
});

module.exports = {Client};
