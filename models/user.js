const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);


/**
 * @desc get user by id
 * @param id
 * @param callback
 */
module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};

/**
 * @desc get user by username
 * @param username
 * @param callback
 */
module.exports.getUserByUsername = function (username, callback) {
  const query = {username: username};
  User.findOne(query, callback);
};

/**
 * @desc save user
 * @param newUser
 * @param callback
 */
module.exports.addUser = function (newUser, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

/**
 * @desc compare user password
 * @param candidatePassword
 * @param hash
 * @param callback
 */
module.exports.comparePassword = function (candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};
