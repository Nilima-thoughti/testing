const Sequelize = require('sequelize');
const { Users } = require('../models');
const {to} = require('await-to-js');
const pe   = require('parse-error');

module.exports.to  = async (promise) => {
    let err, res;
    [err, res] = await to(promise);
    if(err) return [pe(err)];

    return [null, res];
};

  module.exports.ReE = function(res, err, code){ // Error Web Response
    if(typeof err == 'object' && typeof err.message != 'undefined'){
        err = err.message;
        console.log(err)
    }

    if(typeof code !== 'undefined') res.statusCode = code;

    return res.json({success:false, error: err,statusCode:res.statusCode});
};

module.exports.ReS = function(res, data, code){ // Success Web Response
    let send_data = {success:true,data:data,statusCode:200};
    return res.json(send_data)
};




