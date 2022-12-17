import joi from 'joi';

export const genresSchema = joi.object({
	name: joi.string().required(),
	email: joi.string().email().required(),
	password: joi.string().pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/).required(),
	//senha forte: no minimo 8 digitos: letra maiúscula, minúscula, número e caractere especial
	image: joi.string().required()
	//image: joi.string().regex(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/).required()

});