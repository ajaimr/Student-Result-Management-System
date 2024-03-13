// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define schema and model
const dataSchema = new mongoose.Schema({
  name: String,
  reg: String,
  dob: String,
  mark: Number
});
const Data = mongoose.model('Data', dataSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
// Update your Express server code to include a route for fetching data
// Assuming you're using Express.js for your backend

// Define a route to handle fetching student data by reg and dob
app.get('/StudentLogin/data/:reg', async (req, res) => {
  const reg = req.params.reg;
  console.log(reg);
  // const dob = req.params.dob;
  
  try {
    // Query the database to find a student with the provided reg and dob
    const data = await Data.findOne({ reg: reg});

    console.log(data)
    if (!data) {
      // If no student is found, return a 404 Not Found response
      return res.status(404).json({ message: 'Student not found' });
    }

    // If a student is found, return the student data with a 200 OK response
    res.status(200).json({msg:data});
  } catch (error) {
    // If an error occurs during the database operation, return a 500 Internal Server Error response
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.post('/TeacherLogin/Teacher/hello', async (req, res) => {
  try {
    const { name, reg, dob, mark } = req.body;
    const newData = new Data({
      name,
      reg,
      dob,
      mark
    });
    console.log(newData)
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
