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
    items: {
      type: Array,
      default: [],
    }

  },
  { versionKey: false, timestamps: true }
);

const Day = model("day", daySchema);

const joiDaySchema = Joi.object({
  date: Joi.date(),
  item: Joi.object().keys({
    weight: Joi.number().required(),
    name: Joi.string().required(),
  }),
});

const joiGetDaySchema = Joi.object({
  date: Joi.date(),
});

module.exports = {
  Day,
  joiDaySchema,
  joiGetDaySchema,
}
