import Joi from "joi";

export const joinEventSchema = Joi.object({
  userEmail: Joi.string().email().required(),
});

export const updateParticipantSchema = Joi.object({
  status: Joi.string().valid("joined", "cancelled").required(),
});
