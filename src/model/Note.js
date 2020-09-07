const {Schema, model} = require("mongoose")

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model("Note", noteSchema);
