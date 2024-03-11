const express = require('express');
const router = express.Router()
const {getConnectionStatus}=require('./db')
const {TestModel} = require('./schema.js')

router.use(express.json());

router.get('/',async  (req, res) => {
    const finalStatus = await getConnectionStatus()
    res.send(finalStatus)
 });

router.get("/ping", (req, res) => {
    res.send('pong');

});

router.post("/post",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

router.put('/put',async(req,res)=>{
    let finalStatus = await getConnectionStatus()
    finalStatus = "hey yall"
    res.send(finalStatus)
})


router.delete('/delete', async (req, res) => {
    
    res.send('Data deleted successfully');
});

router.get('/players',async(req,res)=>{
    try{
        const test = await TestModel.find({})
        console.log(test)
        res.send(test)
    }catch(err){
        console.log(err)
    }
})

router.get('/getPlayers/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const response = await TestModel.find({_id:id}); 
        console.log(response);
        res.send(response);
    } catch (err) {
        console.log(err);
        res.send("erorr in fetching player details")
    }
});

router.delete('/deletePlayers/:id',(req,res)=>{
    const id = req.params.id
    TestModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

router.put('/updatePlayers/:id',(req,res)=>{
    const id = req.params.id
    TestModel.findByIdAndUpdate({_id:id},{
        name:req.body.name,
        transferFee : req.body.transferFee,
        year : req.body.year,
        from : req.body.from,
        to : req.body.to,
        img : req.body.to
    })
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

router.post('/insert',async(req,res)=>{
    try{
        const newData =  await TestModel.create(req.body)
        res.send(req.body)
    }
    catch(err){
        console.error(err)
    }
})



module.exports = {router}