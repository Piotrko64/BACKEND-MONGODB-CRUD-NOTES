const Note = require('../../db/models/note')

module.exports = {
    saveNotes(req,res){
const newNote = new Note({
            title: 'make a coffe', 
            body: "buy a water!!!"
        });
        try{
            newNote.save().then(()=>{
                console.log("New Note is okey!")
            })
        }
        catch(err){
            console.log(err)
        }
        

        res.send('Homepage is ready!');
    }
}