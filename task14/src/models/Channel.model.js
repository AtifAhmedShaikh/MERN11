import mongoose from "mongoose";

const channelSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    channelName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    headLine:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    profileImage:{
        type:String,
        require:true,
    },
    backgroundImage:{
        type:String,
        require:true,
    },
    followers:[
        {type:mongoose.SchemaTypes.ObjectId,ref:"user"}
    ]
},
{timestamps:true}
);
const ChannelModel=mongoose.model("channel",channelSchema);

export default ChannelModel;