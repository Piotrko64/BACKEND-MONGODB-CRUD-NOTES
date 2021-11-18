const Note = require('../../db/models/note')


module.exports={
   async saveNote(req,res){

       
const title = req.body.title;
const body = req.body.body;
const important = req.body.important;

try{
    const note = new Note({
        title: title,
        body: body,
        important: important,
        like: 0,
        comments: []
        
    });
    
    await note.save();
    res.status(200).json(note)
}
catch(err){
    return res.status(422).json({message: err.message})
}



    },

  async getAllNotes(req,res){
    let doc;
      try{
 // Model.find({}, function)
 doc = await Note.find({});

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
        const important = req.body.important;
   const note = await Note.updateOne({_id: id},{$set:{
        title,
        body,
        important
    }});
    const actualNote = await Note.findOne({_id: id});
        res.status(201).json(actualNote)
      

},
async updateNoteLike(req,res){
    const equal = req.params.equal;
    console.log(equal);
    if(equal==='plus'){
        try{
            const id = req.params.id;
            const actualNote = await Note.findOne({_id: id});
            const actualLike =actualNote.like
            await Note.updateOne({_id: id},{$set:{
            like: actualLike+1
        }})}
        catch(err){
            console.log(err)
        };
    }
else{
    try{
        const id = req.params.id;
        const actualNote = await Note.findOne({_id: id});
        const actualLike =actualNote.like
        await Note.updateOne({_id: id},{$set:{
        like: actualLike-1
    }})}
    catch(err){
        console.log(err)
    }; 
}
    
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

