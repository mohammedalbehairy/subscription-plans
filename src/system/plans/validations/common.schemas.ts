import * as joi from 'joi';
import * as Extension from '@joi/date';
const Joi = joi.extend(Extension as any);

const regex = {
  link: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\S\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
  mobile: /^[0-9]{7,15}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,12}$/,
};
export const id = Joi.string()
  .trim()
  .uuid({ version: ['uuidv4'], separator: '-' });
export const currency = Joi.string()
  .trim()
  .pattern(/^[A-Z]{3}$/);
export const link = Joi.string().trim().pattern(regex.link);
export const price = Joi.number().min(1).precision(2).strict();
export const quantity = Joi.number().integer().min(1);
export const phoneNumber = Joi.number()
  .integer()
  .min(1000000)
  .max(999999999999999);
export const email = Joi.string().trim().pattern(regex.email);
export const countryCode = Joi.string()
  .trim()
  .pattern(/^\+\d{1,4}$/);
export const date = Joi.date().format('YYYY-MM-DD').utc();
export const pageNumber = Joi.number().integer().min(0);
export const version = joi.number().integer().min(0);
