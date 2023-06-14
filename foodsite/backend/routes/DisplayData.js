const express = require ('express')
const  router = express.Router()

router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.food_Item , global.foodCategory)
        res.send([global.food_Item , global.foodCategory])
    } catch (error) {
        console.error(error.message);
        res.send("server err")
    }
})

module.exports = router;
