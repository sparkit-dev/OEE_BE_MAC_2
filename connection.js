const mongoose = require("mongoose");


const connection = async () => {
    try {
     const uri = "mongodb+srv://developersparkit_master:2Q2ohNjI9kQQTrX@cluster0.buwbvv4.mongodb.net/?appName=Cluster0" ;
      await mongoose.connect(uri);

      console.log('Connected to MongoDB');
    } catch (e) {
      console.log('Connection error:', e);
    }
  };

  connection();
  
