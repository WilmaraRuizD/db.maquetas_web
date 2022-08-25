//configuración de variable de entorno con la api_key

const {config} = require("dotenv");
config();

const config_apiKey=process.env.API_KEY 
const decodeToken = async (req, res, next) => {
    const token =req.headers.authorization;
    
    try {
        if(token===null){
          return res.json({message:"Unauthorized"})}
        if (token==config_apiKey) {
          return next();}
        else{ 
      return res.json({message:"Unauthorized"})}
      } 
    catch(error){
      
      return res.json({ message: "Internal Server Error" }).status(500);
    }
  }

  module.exports =  decodeToken ;
