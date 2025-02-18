const experss=require('express');
const app=experss();
const middleware=(req,res,next)=>{
    console.log('middleware');
    next();
}
app.use(middleware);
app.get('/',(req,res)=>{
    res.send('Hello World');
    
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})