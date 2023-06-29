const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    petName: { type: 'String', required: true },
    description: { type: 'String' },
    age: { type: 'Number', required: true},
    color: { type: 'String', required: true },
    images: [{
        type: String
    }],
    breed: {type : 'String', required:true},
    isAdopted: { type: 'Boolean', default: false }   
},
    {
        collection: 'pets-data'
    }
)

const model = mongoose.model('PetData', PetSchema)

module.exports = model