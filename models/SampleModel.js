import mongoose from 'mongoose'

const SampleModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        classRoom:{
            type:String,
            required:true,
        }
    },
    { timestamps: true }
)


const Sample = mongoose.model("Sample",SampleModel)
export default Sample