console.log("hello");

// rest api using node &  expressjs

let express=require("express");
let user=require("./MOCK_DATA.json");
let fs = require("fs");

let app=express();

  app.use(express.urlencoded({extended: false}));   //middlware(pluging)


/* app.get("/user",(req,res)=>{            //Get => /user :get all user
      return res.json(user) 
 })*/

//************************************************************************************ */

/* app.get("i",(req,res)=>{      ////Get => /user :get all user in html form
    let html=`
    <ul>
    ${user.map((user)=>`<li>${user.first_name}</li>`)}
    </ul>
    `;
     return res.send(html) 
 })*/

//*********************************************************************************** */

 /*app.get("/user/:id",(req,res)=>{  //: means dynamic parameter   
     let id = Number(req.params.id);                //Get => /user/1 :get user with id 1       
     let users= user.find((user)=>user.id===id);
     return res.json(users) 
 })*/

//*********************************************************************************** */

      app.post("/user/:id",(req,res)=>{          //post => /user/2 : add user with id 2
        //create new user 
        let body = req.body;                     //use postman
        console.log(body);
          user.push({...body,id: user.length});
          fs.writeFile("MOCK_DATA.json",JSON.stringify(user),(err,res)=>{ return res.send({status :"success",id:"user.length" });
        })
     });


//********************************************************************************** */

      /* app.patch("/user/:id",(req,res)=>{  //patch => /user/3 : update exesting record with id 3
        //update eexisting user 
        return res.json({status :"pending"})})  */

//*********************************************************************************** */

       /* app.delete("/user/:id",(req,res)=>{  //delete => /user/4 : delete exesting record with id 4
            //delete existing user 
          return res.json({status :"pending"})}) */

//*********************************************************************************** */

      /*  app.route("/user/:id").get((req,res)=>{  //: means dynamic parameter
            let id = Number(req.params.id);
            let users= user.find((user)=>user.id===id);
            return res.json(users) 
        })
        .post((req,res)=>{
          
            return res.json({status:"success"});
          });
            
          return res.json({status :"pending"})})
          .patch((req,res)=>{
            //update eexisting user 
            return res.json({status :"pending"})})
            .delete((req,res)=>{
                //delete existing user 
              return res.json({status :"pending"})})*/

 //********************************************************************************** */

app.listen(8003,()=>{console.log("djdjdjheed")});
