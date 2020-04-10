const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

const uniqueValidator = require('mongoose-unique-validator')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 5,
    required: true,
    unique: true
  },
  author: {
    type: String,
    minlength: 5,
    required: true
  },
  url: {
    type: String,
    minlength: 5,
    required: true
  },
  likes: {
    type: Number
  }
})

blogSchema.plugin(uniqueValidator)

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)