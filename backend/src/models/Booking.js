const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  date: String,
  approved: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' //referencia para o model User
  },
  spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot' //referencia para o model Spot
  }
});

module.exports = mongoose.model('Booking', BookingSchema); 