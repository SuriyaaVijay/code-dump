const express=require('express')
const fs=require('fs')
const app=express()

app.use(express.json())
// creating and overwritting already existing or rather adding to it
fs.appendFile('demo.txt',"sending a message",(err)=>{
  console.log('demo.txt created')
})
//reading
fs.readFile('demo.txt',"utf-8",(err,data)=>{
  console.log(data)
})
//deletion the whole file
fs.unlink("demo.txt",(err)=>{
  console.log("file-deleted")
})
fs.truncate("demo.txt",0,(err)=>{
  console.log("content deleted")
})


app.get('/',(req,res)=>{
  res.send('pppppppppppp')
})
app.post('/get', (req, res) => {
  const datax = JSON.stringify(req.body);

  fs.appendFile('test.json', datax, (err) => {
    if (err) {
      console.error('Error appending to file:', err);
      res.status(500).send('Error appending to file');
    } else {
      console.log(datax, '..added');
      res.send('Response saved to demo.txt');
    }
  });
});

app.get('/datafromjson' ,(req,res)=>{
  fs.readFile("test.json",'utf-8',(err,data)=>{
    if(err){
      console.log(err)
    }
    else{try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      res.status(500).send('Error parsing JSON');
    }
    }
  })
})


app.listen(3005,console.log('on 3005..'))
