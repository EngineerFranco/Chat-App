const express = require('express');
const router = express.Router();
module.exports = router;


router.post('/register', (req, res) => {
  
  });
  

  router.post('/login', (req, res) => {
   
  });
  
 
  router.get('/account', (req, res) => {
    
  });
  
 
router.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    
   
    if (!username || !password || !email) {
      return res.status(400).json({ message: 'Please provide all the required information' });
    }
    
    
    res.status(201).json({ message: 'User registered successfully' });
  });
  

  router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
   
    if (!username || !password) {
      return res.status(400).json({ message: 'Please provide username and password' });
    }
    
    
    res.status(200).json({ message: 'Login successful' });
  });
  
  
  router.get('/account', (req, res) => {
    
    res.status(200).json({ username: 'franco_santos', email: 'engr.franco26@gmail.com' });
  });
  