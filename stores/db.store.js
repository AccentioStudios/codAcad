const {
    Sequelize
} = require("sequelize");
const UserModel = require('../models/user.model');


const db = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    });

const User = UserModel(db);

// Blog.belongsToMany(Tag, { through: BlogTag, unique: false })
// Tag.belongsToMany(Blog, { through: BlogTag, unique: false })
// Blog.belongsTo(User);

sequelize.sync({
        force: true
    })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    User
};