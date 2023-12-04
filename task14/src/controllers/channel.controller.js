import Article from "../models/Article.model.js";
import Channel from "../models/Channel.model.js";

const channelController={
    async registerChannel(req,res){
        try{
            const {name,channelName,backgroundImage,about,headLine,profileImage}=req.body;
            const savedChannel=new Channel({
                name,
                channelName,
                backgroundImage,
                profileImage,
                about,
                headLine
            });
            await savedChannel.save();
            res.status(201).json({message:"successfully Added New channel :",channel:savedChannel});
        }catch(error){
            res.status(500).json({message:"Internal server Error !"});
        }
    },
    async getAllChannels(req,res){
        try{
            const channels=await Channel.find();
            res.status(200).json({channels})
        }catch(error){
            res.status(500).json({message:"Internal server Error !"});
        }
    },
    async channelProfile(req,res){
        try{
            const {id}=req.params;
            const channel=await Channel.findById(id);
            const articles=await Article.find({author:id});
            res.status(200).json({info:channel,articles});
        }catch(error){
            res.status(500).json({message:"Internal server Error !"});
        }
    }
}

export default channelController;