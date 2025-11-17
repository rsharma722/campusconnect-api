import Joi from 'joi';

export const createEventSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().max(500).optional(),
  categoryId: Joi.string().optional(),
  date: Joi.string().isoDate().required(),
});
