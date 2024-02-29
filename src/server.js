
const app = require('./app');

const PORT  = process.env.PORT || 5000






app.listen(PORT , (err)=>{
    
    err? `console.log(err.message)`:console.log(`Server is running on PORT ${PORT}`);;
})