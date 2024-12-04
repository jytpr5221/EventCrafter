const JWT=require('jsonwebtoken')
const secret='#$uperMan@123'

function createTokenForUser(user){

    const payload={
        fullName:user.fullName,
        _id:user._id,
        email:user.email,
         
    }

    const token=JWT.sign(payload,secret)
    return token
}

function validateToken(token) {
    try {
        const payload = JWT.verify(token, secret);
        return payload;
    } catch (err) {
     
        return null;
    }
}


module.exports={
    createTokenForUser,
    validateToken
}