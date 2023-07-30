const { User } = require('../models');
// const bcrypt = require('bcrypt');
const password = 'password';
// const hash = bcrypt.hashSync(password, 10);

const genPassword = require('../lib/passwordUtils').genPassword;
const saltHash = genPassword(password);  
const salt = saltHash.salt;
const hash = saltHash.hash;

const userData = [
    {
        username: 'test1',
        id: 1,
        email:'test1@gmail.com',
        hash: hash,
        salt: salt
    },
    {
        username: 'test2',
        id: 2,
        email: 'test2@gmail.com',
        hash: hash,
        salt: salt
    },
    {
        username: 'test3',
        id: 3,
        email: 'test3@gmail.com',
        hash: hash,
        salt: salt
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;