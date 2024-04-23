const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    userName: {
        type: String,
        trim: true,
    },
    phoneNumber: {
        type: String,
    },
    organisationLogo: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error('Password must contain at least one letter and one number');
            }
        },
    },
    userType: {
        type: String,
        enum: ['individual', 'business', 'admin'],
        default: 'individual',
        required: true,
        trim: true,
    },
    organizationName: {
        type: String,
        trim: true,
    },
    aboutCompany: {
        type: String,
        trim: true,
    },
    companyClimateStrategy: {
        type: String,
        trim: true,
    },
    klixPoints: {
        type: Number,
        default: 0,
    },
    giftCardReceived: {
        type: Boolean
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    profilePicture: {
        type: String,
    },
    impactKlixPoints: {
        type: Number,
        default: 0,
    },
    impactKlixPointsToAdd: {
        type: Number,
        default: 0,
    },
    collectibles: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'CollectiblesMaster',
    },
    stripeCustomerId: {
        type: String,
    },
    paymentMethod: {
        type: [String],
    },
    oneTimePlanTypeId: [
        {
            type: String,
        },
    ],
    // subscriptionPlan: [subscriptionSchema],
    isFirstLogin: {
        type: Boolean,
        default: true,
    },
    displayName: {
        type: String,
    },
    registeredBusinessAddress: {
        type: String,
    },
    registeredBusinessState: {
        type: String,
    },
    gstNumber: {
        type: String,
    },
    addedToZoho: {
        type: Boolean,
        default: false,
    },
    zohoContactId: {
        type: String,
    },
    gstFormVisible: {
        type: Boolean,
        default: true,
    },
    gstDetailsSwitch: {
        type: Boolean,
        default: false,
    },
    publicUrlId: {
        type: String,
    }
},
    {
        timestamps: true,
    }

)


const  User = mongoose.model('User', userSchema);
module.exports = User;