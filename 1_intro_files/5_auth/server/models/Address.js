const { Model } = require('objection')

class Address extends Model {
    static get tableName(){
        return 'address'
    }
    static get idColumn(){
        return 'id';
    }
}

module.exports = Address;