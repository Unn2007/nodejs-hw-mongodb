import Joi from 'joi';
import joiObjectId from 'joi-objectid';

// Создаем валидатор ObjectId
const objectId = joiObjectId(Joi);

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
  userId: objectId().required() // Используем `objectId` как функцию
});

// import Joi from 'joi';
// import joiObjectId from 'joi-objectid';

// joiObjectId(Joi);

// export const createContactSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required(),
//   phoneNumber: Joi.string().min(3).max(20).required(),
//   email: Joi.string().email(),
//   isFavourite: Joi.boolean(),
//   contactType: Joi.string().valid('work', 'home', 'personal').required(),
//   userId: Joi.objectId().required()
// });

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
