const experss=require('express');
const app=experss();
app.get('/',(req,res)=>{
    res.send('Hello World');
})
app.get('/about',(req,res)=>{
    res.send('about');
})
app.get('/contact',(req,res)=>{
    res.send('contact');
})
app.use((req,res)=>{
    res.status(404).send('Page not found');})
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})