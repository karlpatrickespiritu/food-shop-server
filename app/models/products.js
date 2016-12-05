const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String, default: '' },
  price: { type: Number, default: '' },
  description: { type: String, default: '' }
})

/**
 * Validations
 */
ProductSchema.path('name').validate((name) => name.length, 'Name is required');

ProductSchema.path('price').validate((price) => price.length, 'Price is required');

/**
 * Methods
 */
ProductSchema.methods = {
  // 
}

/**
 * Statics
 */
ProductSchema.statics = {
  /**
   * Load
   *
   * @param {Object} options
   * @param {Function} cb
   * @api private
   */
  load: (options, cb) => {
    options.select = options.select || 'name price description';
    return this.findOne(options.criteria)
      .select(options.select)
      .exec(cb)
  }
}

mongoose.model('Product', ProductSchema)
