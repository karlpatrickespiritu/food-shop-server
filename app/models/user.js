const mongoose = require('mongoose')
const Schema = mongoose.Schema
const paginate = require('mongoose-paginate')

const UserSchema = new Schema({
  name: { type: String, required: [true, 'name is required'] },
  email: { type: String, required: [true, 'email is required'] },
  provider: { type: String, default: '' },
  facebook: {},
  twitter: {},
  github: {},
  google: {},
  linkedin: {}
})

/**
 * Methods
 */
UserSchema.methods = {}

/**
 * Statics
 */
UserSchema.statics = {
  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */
  load: function (options, cb) {
    options.select = options.select || 'name email'
    return this.findOne(options.criteria)
      .select(options.select)
      .exec(cb)
  }
}

/**
 * Plugins
 */
UserSchema.plugin(paginate)

mongoose.model('User', UserSchema)
