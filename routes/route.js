const {PostCandidate,GetCandidate} = require("../controllers/controller")

const router = require("express").Router()

router.get("/",(req,res)=>{
    res.send("hello world")
})

router.post('/candidates',PostCandidate)

router.get('/candidates',GetCandidate)

module.exports = router