const Joi = require("joi");

const registerValidator = (req, res, next) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().label('Confirm password').messages({
            'any.only': '{{#label}} does not match password',
        }),
        userType: Joi.string().valid('individual', 'organizational','admin').required().label('User Type'),
        organizationName: Joi.when('userType', {
            is: 'organizational',
            then: Joi.string().required().label('Organisation Name')
        }),
        displayName: Joi.when('userType', {
            is: 'organizational',
            then: Joi.string().required().label('Display Name')
        })

    })

    const { error, value } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "bad request", error })
    }
    next();
}

module.exports=registerValidator;
