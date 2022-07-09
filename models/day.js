const { Schema, model } = require("mongoose");
const Joi = require("joi");

const daySchema = Schema(
  {
    date: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    item: {
      type: Array,
      default: [],
    }

  },
  { versionKey: false, timestamps: true }
);

const Day = model("day", daySchema);

const joiDaySchema = Joi.object({
  date: Joi.string(),
  item: Joi.object().keys({
    weight: Joi.number().required(),
    productName: Joi.string().required(),
  }),
});


module.exports = {
  Day,
  joiDaySchema,
};



const data = [
  {
    id: '12345',
    createdAt: '2022-07-07T17:48:38.943+00:00',
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    item: [
      {
        weight: 250,
        productName: 'tomato',
        call: 450,
      }
    ]
  }
]