const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const  bcrypt = require('bcryptjs');

var password = '123abc';
// bcrypt.genSalt(10,(err,salt) => {
//     bcrypt.hash( password,salt,(err,hash) => {
//       console.log(hash);
//     });
// });

var hashedPassword = '$2a$10$FOooPRGP8fwZD62x0JAfoeckgQ5vj9mOCDaID1aW3mrDc9XMwW1ga';
bcrypt.compare(password,hashedPassword,(err,res) => {
    console.log(res);
});


// var data = { id: 10 };

// var token = jwt.sign(data,'123abc');
// console.log(token);

// var decoded = jwt.verify(token,'123abc');
// console.log('decoded :',decoded);





// var message = 'I am user number 3';

// var hash = SHA256(message).toString();
// console.log(`message : ${message}`);
// console.log(`Hash : ${hash}`);

// var data = {}