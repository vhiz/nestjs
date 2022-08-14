import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    amount: {type:String , require: true}
})