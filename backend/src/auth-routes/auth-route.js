const express= require('express')
const { checkForAuthenticationCookie } = require('../middlewares/authentication')
const router= express.Router()
const Organizer=require('../organizer/models/organizer.js')
const cookie='token'
router.get('/get-user',checkForAuthenticationCookie(cookie),(req,res)=>{


    if (req.user) {
        return res.json({ user: req.user });
    } else {
        return res.status(401).json({ error: 'User not authenticated' });
    }
})

router.post('/register-user',async(req,res)=>{
    const {company,address,contact,email,password}=req.body
    await Organizer.create({
        company,
        email,
        password,
        address,
        contact
    })

    return res.json( {msg:"success"})
})


module.exports=router