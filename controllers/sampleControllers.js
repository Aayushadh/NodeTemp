import Sample from "../models/SampleModel.js"

const helloworld= (req,res)=>{
    res.send("Hello World")
}

const dataSave = async (req,res)=>{

    const {name,classRoom} = req.body
    console.log(name)
    console.log(classRoom)
    const obj = await Sample.create({name,classRoom})

    if(obj)
    {
        res.status(201).send(obj)
    }
    else
    {
        res.status(400)
    }

}

const getData = async(req,res)=>{

    const obj = await Sample.find({})
    res.status(200).send(obj)
}


export {helloworld,dataSave,getData}