
const Customer  = require("../models/customerscuma")
const moment = require('moment');


const user_put =(req, res) => {

    Customer.updateOne({_id:req.params.id},req.body)
    .then(() => {
      res.redirect('/')
     
    }).catch((err) => {
      console.log(err)
      
    })  }


   const user_edit_get = (req, res) => {
        Customer.findById(req.params.id).then((resulet) => {
          res.render("user/edit" , {arr:resulet});
        })
        .catch((err) => {
          console.log(err)    
        })  }  
        
    const user_index_get =  (req, res) => {
            Customer.find().then((resulet) => {
             res.render("index",{ arr :resulet , moment : moment});
            }).catch((err) => {
              console.log(err) })}    


    const user_view_get =(req, res) => {
                Customer.findById(req.params.id).then((resulet) => {
                  res.render("user/view", {arr:resulet , moment : moment});
                }) .catch((err) => {
                  console.log(err)
                }) }   
                
                
    const user_search_post = (req, res) => {
        const findtext = req.body.findtext.trim()
        console.log('*****************************************')
        Customer.find( { FirstName :{ $regex: `.*${findtext}`,$options: 'i'}})
        //Customer.find({Age: {$gt:33} }) >33
        //Customer.find({Age: {$gte:33} }) >=33
         //Customer.find({Age: {$lt:33} }) <33
         //Customer.find({FirstName : {"Ala"} }) 
         //Customer.find({ $or : [ {FirstName: "Ala"} ,{LastName:"Nsir"}   ]}) 
     /*      Principaux motifs en regex :
     ^ : Le texte doit commencer par ce qui suit.
     Exemple : ^Jo — Le prénom doit commencer par "Jo".
     $ : Le texte doit se terminer par ce qui précède.
     Exemple : son$ — Trouvera "Jackson" ou "Emerson".
     .* : Correspond à n'importe quelle séquence de caractères.
     Exemple : .*son — Trouvera "Emerson", "Jackson", ou "Harrison".
     [abc] : Correspond à l'un des caractères spécifiés.
     Exemple : [JH]o — Trouvera "Jo" ou "Ho". */
     
        .then((resulet) => {
        
        res.render('user/search', {arr:resulet , moment:moment})
        }).catch
      }    
      
      
    const user_delete = (req, res) => {
        Customer.deleteOne({_id:req.params.id}).then(() => {
          res.redirect("/");
        })
         .catch((err) => {
          console.log(err)
         })
       }  

     const user_add_get = (req, res) => {
        res.render("user/add");
        }  

     const user_post =  (req, res) => {
        Customer.create(req.body).then(() => {
         res.redirect("/")
        }).catch(() => {
         
        })   
     }     

module.exports ={ user_put , user_edit_get , user_index_get ,user_view_get , user_search_post , user_delete ,
    user_add_get , user_post
}
         