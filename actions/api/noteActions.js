const Note = require('../../db/models/note')


module.exports={
   async saveNote(req,res){

       
const title = req.body.title;
const body = req.body.body;
try{
    const note = new Note({
        title: title,
        body: body
    });
    
    await note.save();
}
catch(err){
    return res.status(422).json({message: err.message})
}


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
    async deleteNote(req,res){
        try{
            const id = req.params.id;
            const note = await Note.deleteOne({_id: id});
            const actualNote = await Note.find({});
        res.status(201).json(actualNote)
          }
          catch(err){
              console.log(err)
          }
 }
}

