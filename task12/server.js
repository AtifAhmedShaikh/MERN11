const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();
const PORT = 5000;
app.use(express.json());
app.use(router);
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb+srv://atifahmad2219:ecommerceapp@cluster0.malln0y.mongodb.net/store?retryWrites=true&w=majority"
    );
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection Error");
  }
};
connectDB();
//write movie schema
const movieSchema = new mongoose.Schema({
  name: { type: String },
  minAge: { type: Number },
  maxAge: { type: Number },
  category: { type: String },
});
//write movie schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [10, "name is too lengthy "],
    minLength: [5, "name must be 5"],
  },

  role:{
    type:String,  
    required:true,
    enum:["ADMIN","USER"],
    default:"USER"//when not given it also set default value
  },
  age: {
    type: Number,
    min: [3, "age must be Greater then 3 "],
    max: [18, "age must be Less then 18 "],
    required: true,
  },
  balance:{
    type:String,
    default:10//when not given it also set default value
  },
  city: { type: String },
  password:{
    type:String,
    required:true,
    select:false,
    minLength:[10,"password must be Lese then 10"],
    minLength:[20,"password must be Greater then 10"],
  }
});

const MovieModel = mongoose.model("movie", movieSchema);
const PersonModel = mongoose.model("person", personSchema);

router.post("/api/users/create", async (req, res) => {
  const { name, age, city,role,password } = req.body;
  try{
    const newPerson = new PersonModel({
      name,
      age,
      city,
      role,
      password
    });
    await newPerson.save();
    res.status(201).json({ message: "Ok successfully added" });
  }catch(error){
    console.log(error);
    res.status(400).json({ message: "bad request " });
  }
});
//methods of monooge
PersonModel.pre("save",()=>{
  console.log(this)
});
PersonModel.pre("save",()=>{
  console.log(this)
});


router.post("/api/movie/create", async (req, res) => {
  const { name, age, city } = req.body;
  const newMovie = new PersonModel({
    name,
    age,
    city,
  });
  await newMovie.save();
  res.status(200).json({ message: "Ok successfully added" });
});

const auth=async(req,res,next)=>{
  const {_id}=req.body;
  const user=await PersonModel.findById(_id);
  if(!user){
   return res.status(404).json({message:"user not found !"});
  }
  if(user.role!=="ADMIN") {
    return res.status(401).json({message:"your not authorized "});
  }
  req.user=user;
  next();
}
router.post("/api/movie/createMany",auth, async (req, res) => {
  const { movies } = req.body;
  const newMovie = await MovieModel.insertMany(movies);//pass array list of data or  array of Obj
  res.status(200).json({ message: "Ok successfully added multiple " });
});



router.get("/api/movies/all", async (req, res) => {
  const movies = await MovieModel.find();
  res.status(200).json({ movies });
});
//Authorized Unauthorized
const middle=(req,res,next)=>{
  req.user={
    name:"atif"
  }
  next();//must call next ,otherwise not call your next function  or controller
  //otherwise you send response to user ---> res.json()
}

router.get("/api/users/all",async (req, res) => {
  const persons = await PersonModel.find();
  res.status(200).json({ persons });
});
router.get("/api/users/elders", async (req, res) => {
  const persons = await PersonModel.find({age:{$gte:45}});
  res.status(200).json({ persons });
});
router.get("/api/users/small", async (req, res) => {
  const persons = await PersonModel.find({age:{$lte:5}});
  res.status(200).json({ persons });
});

app.listen(PORT, () => {
  console.log("server has starting !");
});
