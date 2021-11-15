const Note = require('../../db/models/note')


module.exports={
   async saveNote(req,res){

       
const title = req.body.title;
const body = req.body.body;

const note = new Note({
    title: title,
    body: body
});

await note.save();

res.status(200).json(note)
    },

  async getAllNotes(req,res){
    let doc;
      try{
 // Model.find({}, function)
 doc = await Note.find({});

 console.log(doc);
 res.status(200).json(doc)
      }
      catch(err){
          return res.status(500).json({message: err.message})
      }
       
    
    
},
  async  getNote(req,res){
      try{
        const id = req.params.id;
        const note = await Note.findOne({_id: id});
        res.status(200).json(note)
      }
      catch(err){
          console.log(err)
      }
        
    
},
  async  updateNote(req,res){
        const id = req.params.id;
        const title = req.body.title;
        const body = req.body.body;
   const note = await Note.updateOne({_id: id},{$set:{
        title,
        body
    }});
    const actualNote = await Note.findOne({_id: id});
        res.status(201).json(actualNote)
      

},
    deleteNote(req,res){
        const id = req.params.id;
        res.send('delete'+id)
 }
}

