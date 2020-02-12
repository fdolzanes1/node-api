const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ContactSchema = new mongoose.Schema({
    nome: {
      type: String, 
      required: true,
    },
    email: {
      type: String, 
      required: true,
    },
    telefone: {
      type: String, 
      required: true,
    },
    createdAt: {
      type: Date, 
      default: Date.now,
    }  
});

ContactSchema.plugin(mongoosePaginate);
mongoose.model('Contact', ContactSchema);