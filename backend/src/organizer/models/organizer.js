const mongoose = require('mongoose')
const createTokenForUser=require('../../services/authentication.js')
const OrganizerSchmea  = new mongoose.Schema({


    company:{

        type:String,
        required:true,
        unique:true
            
    },
    email:{

        type:String,
        required:true,
        unique:true
    },

    password:{
         
        type:String,
        required:true,
        
    },

    address:{

        type:String,
        required:true,
        unique:true
    },

    contact:{

        type:Number,
        required:true,
        unique:true
    },
     salt: {
        
        type:String

    }
    
},{ timestamps: true})


OrganizerSchmea.pre('save',function(next){
    const org=this

    if(!org.isModified('password'))  return 
    const salt=randomBytes(16).toString()
    const hashedPassword=createHmac('sha256',salt).update(org.password).digest('hex')
    this.salt=salt
    this.password=hashedPassword

    next()
}) 

OrganizerSchmea.static('matchPassword',async function(email,password){

    const org=await this.findOne({email})
    if(!org) throw new Error('user not found')

    const salt=user.salt
    const hashedPassword=user.password

    const userProvidedPasword=createHmac('sha256',salt).update(password).digest('hex')


    if(hashedPassword !== userProvidedPasword) throw new Error('password incorrect')

    const token=createTokenForUser(user)
    
    return token
})

const Organizer = mongoose.model('organizer',OrganizerSchmea)

module.exports = Organizer


