const { Schema, model } = require("mongoose");

const albumSchema = new Schema(
  {
    title: { type: String },
    artist: { type: String },
    gender: [String],
    year: { type: String },
    photoURL: { type: String },
  },
  { versionKey: false }
);

module.exports = model("album", albumSchema);
