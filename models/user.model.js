const {
    DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('user', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: sequelize.UUIDV4, // Or Sequelize.UUIDV1
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
    });
}









// //Database 
// const {
//     Sequelize,
//     Op,
//     Model,
//     DataTypes
// } = require("sequelize");
// const bcrypt = require('bcrypt');
// const db = require('../stores/db.store');
// //Model Verification
// const Joi = require('joi');

// class User extends Model {
//     constructor(firstName, lastName, email, password, role) {
//         super();
//         this.firstName = firstName,
//             this.lastName = lastName,
//             this.email = email,
//             this.password = password,
//             this.role = role
//     }

//     async checkPassword(passwordString, hash) {
//         const match = await bcrypt.compare(passwordString, hash);
//         if (match) {
//             return true;
//         }
//         return false;
//     }


//     async save() {
//         console.log("Saving user...");
//         try {
//             await User.sync()
//             // let crytoPass = await bcrypt.hash(this.password, 10);
//             const user = await User.create({
//                 role: this.role,
//                 firstName: this.firstName,
//                 lastName: this.lastName,
//                 email: this.email,
//                 password: this.password,
//             });
//             return user;
//         } catch (onError) {
//             console.log(onError);
//             return false;
//         }
//     }
//     validateSchema() {
//         const schema = {
//             firstName: Joi.string().min(3).required(),
//             lastName: Joi.string().min(3).required(),
//             email: Joi.string().email().max(250).required(),
//             password: Joi.string().min(8).required(),
//             role: Joi.string()
//         };
//         return Joi.validate({
//             firstName: this.firstName,
//             lastName: this.lastName,
//             email: this.email,
//             password: this.password,
//             role: this.role
//         }, schema);
//     }



// }
// User.init({
//     id: {
//         primaryKey: true,
//         type: DataTypes.UUID,
//         defaultValue: Sequelize.UUIDV4, // Or Sequelize.UUIDV1
//         unique: true
//     },
//     role: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// }, {
//     // Other model options go here
//     sequelize: db, // We need to pass the connection instance
//     modelName: 'User', // We need to choose the model name
//     timestamps: true,
//     createdAt: true,
//     updatedAt: true
// });

// module.exports = User;