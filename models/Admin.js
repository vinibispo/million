const mongoose = require('../database')
const Admin = mongoose.model('user', { 
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true },
  });
module.exports = Admin