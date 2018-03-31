const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bottle');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Mongo connect success!');
});

const bottleSchema = mongoose.Schema({ message: String, createdAt: Date });

const Bottle = mongoose.model('Bottle', bottleSchema);

const showAllMessages = () => Bottle.find().sort('-createdAt');

const addMessage = (msg) => Bottle.create({
  message: msg,
  createdAt: new Date(),
});

module.exports = {
  showAllMessages,
  addMessage,
};
