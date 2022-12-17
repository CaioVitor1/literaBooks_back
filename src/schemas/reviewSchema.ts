import joi from 'joi';

export const newReviewSchema = joi.object({
	title: joi.string().required(),
	image: joi.string().regex(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/).required(),
	author: joi.string().required(),      
	genreId: joi.number().required(),
	description: joi.string().required()

}); 