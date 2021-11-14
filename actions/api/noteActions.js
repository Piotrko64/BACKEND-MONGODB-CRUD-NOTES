const Note = require('../../db/models/note')


module.exports={
    saveNotes(req,res){
// const newNote = new Note({
//             title: 'make a coffe', 
//             body: "buy a water!!!"
//         });
//         try{
//             newNote.save().then(()=>{
//                 console.log("New Note is okey!")
//             })
//         }
//         catch(err){
//             console.log(err)
//         }
        
const title = req.body.title;
const body = req.body.body;

        res.send('Note is ready'+title+body);
    },

    getAllNotes(req,res){
        res.send('API')
},
    getNote(req,res){
        const id = req.params.id;
        res.send('one note'+id)
    
},
    updateNote(req,res){
        const id = req.params.id;
    res.send('update'+id)
},
    deleteNote(req,res){
        const id = req.params.id;
        res.send('delete'+id)
 }
}

