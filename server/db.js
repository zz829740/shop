const mongoose = require('mongoose')
// const init = require('./init.json')
const Schema = mongoose.Schema



const goodSchema = new Schema({
  gname: String,
  // date: Date,
  gprice: String,
  inventory: String,
  image: String
})

const cartSchema = new Schema({
	cname: String,
	cprice: String,
	count: Number
})

const userSchema = new Schema({
	name:{
		unique:true,
		type:String
	},
	pwd: String,
	role: {
		type: Number,
		default: 0
	}
})

const orderSchema = new Schema({
	oname: String,
	oprice: String,
	ocount: Number
})

const Models = {
 
  Good: mongoose.model('Good', goodSchema),
  User: mongoose.model('User', userSchema),
  Cart: mongoose.model('Cart', cartSchema),
  Order: mongoose.model('Order', orderSchema),
  initialized: false
}


// const initialize = function () {
//   Models.User.find(null, function (err, doc) {
//     if (err) {
//       console.log(err)
//     } else if (!doc.length) {
//       console.log('Database opens for the first time...')
//       Promise.all(init.map(item => new Models[item.type](item).save()))
//         .then(() => console.log('Initialize successfully.'))
//         .catch(() => console.log('Something went wrong during initializing.'))
//     } else {
//       Models.initialized = true
//     }
//   })
// }

mongoose.connect('mongodb://127.0.0.1/blog')
// mongoose.set('debug', true)

const db = mongoose.connection

db.on('error', function () {
  console.log('Database connection error.')
})

db.once('open', function () {
  console.log('The database has connected.')
  // initialize()
})

module.exports = Models
