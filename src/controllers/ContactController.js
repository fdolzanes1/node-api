const mongoose = require('mongoose'); 

const Contact = mongoose.model('Contact');

module.exports = {
  async index(req, res) {
    const contacts = await Contact.paginate({},{ page: 1, limit: 10 });
    return res.json(contacts);
  },
  async store(req, res) {
    const contacts = await Contact.create(req.body);
    return res.json(contacts);
  }, 
  async show(req, res) {
    const contacts = await Contact.findById(req.params.id);
    return res.json(contacts);
  },
  async update(req, res){
    const contacts = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(contacts);
  },
  async delete(req, res){
    const contacts = await Contact.findByIdAndDelete(req.params.id);
    return res.json(contacts);
  }
};