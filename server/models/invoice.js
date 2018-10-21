const mongoose = require('mongoose');

let Invoice = mongoose.model('Invoice', {
  invNumber   :{

  },
  billedAmount:{

  },
  date        :{

  },
  paid        :{

  }
});

module.exports = {Client};
