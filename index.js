// const express = require('express');
// const mongoose = require('mongoose');
// const users = require('./MOCK_DATA.json');

// const app = express();
// const PORT = 3000;

// mongoose.connect("mongodb://127.0.0.1:27017/sachindb")
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => console.log("Error occurred", err));


// const userSchema = new mongoose.Schema({
//     firstName: { 
//         type: String,
//         required: true,
//     },
//     lastName: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//     },
// });

// const User = mongoose.model("User", userSchema);

// app.get('/api/users', (req, res) => {
//     return res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
    
//     if (user) {
//         return res.json(user);
//     } else {
//         return res.status(404).json({ error: "User not found" });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const maths = require('./maths')
const express = require('express');

const app = express();

app.get('/',(req , res)=>{
return res.send("hello world")
})

app.listen("3000",()=>{
    console.log("hello world")
})

