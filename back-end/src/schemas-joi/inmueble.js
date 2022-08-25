const Joi=require('joi')

const inmuebleShema=Joi.object({
    num:Joi.string().min(1).max(100).required(),
    state:Joi.number().required()
})

module.exports={inmuebleShema}