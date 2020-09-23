//Database 
const {
    Sequelize,
    Op,
    Model,
    DataTypes
} = require("sequelize");
const bcrypt = require('bcrypt');
const db = require('../stores/db.store');
//Model Verification
const Joi = require('joi');

class User extends Model {
    constructor(id, role, firstName, lastName, email, password, role) {
        this.id = id,
            this.role = role,
            this.firstName = firstName,
            this.lastName = lastName,
            this.email = email,
            this.password = password,
            this.role = role
    }

    static validateSchema(user) {
        const schema = {
            firstName: Joi.string().min(3).required(),
            lastName: Joi.string().min(3).required(),
            email: Joi.string().email().max(250).required(),
            password: Joi.string().min(8).required()
        };
        return Joi.validate(user, schema);
    }

    static async checkPassword(passwordString, hash) {
        const match = await bcrypt.compare(passwordString, hash);
        if (match) {
            return true;
        }
        return false;
    }

    async create() {
        const jane = await User.create({
            role: this.role,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: cryptoPassword(this.password),
        });
    }

}

function cryptoPassword(passwordString) {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(passwordString, saltRounds);
    return hash;
}

User.init({
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
        unique: true
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
    db, // We need to pass the connection instance
    modelName: 'User', // We need to choose the model name
    timestamps: true,
    createdAt: true,
    updatedAt: true
});

module.exports = User;