import mongoose from 'mongoose';

const Schema = mongoose.Schema; //const { Schema } = mongoose;

const Model = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: {} },
);

export default mongoose.model('Base', Model);
