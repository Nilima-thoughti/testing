const {Users} = require("../models");
const {to,ReE,ReS} = require("../services/util.Service");

////Create the post
const createUsers = async (req,res)=>{
    // let bodyQuery = req.body;
    var Name = req.body.Name;
    var Email = req.body.Email;
    var Phone_no = req.body.Phone_no;
    var Address = req.body.Address;
    var profile = req.file.originalname;
    console.log(profile)
    // var pic = `http://localhost:3000/profile/${profile}`
      // console.log(req.file)
    
  let err,postData;
  [err,postData] = await to (Users.create({Name:Name,Email:Email,Phone_no:Phone_no,Address:Address,Profile_photo:profile}));
  if(err) return ReE(res,err,422);
  return ReS(res,postData,200)
}
module.exports.createUsers = createUsers;


/////Get the Users Data////////
const fetchUsers = async(req,res)=>{
  let err,getData;
  [err,getData] = await to(Users.findAll());
  if(err) return ReE(res,err,422);
  if(!getData) { return ReE(res,'users Not found',422); } 
      if(getData) {      
            //  res.json( getData)
            return  ReS(res,getData,200);
            }
          else { return  ReS(res,'users Not exist',200); } 
}
module.exports.fetchUsers = fetchUsers;

////////Delete users////////
const deleteUsers = async(req,res)=>{
  var Id = req.query.Id;
   let err,delData;
   [err,delData] = await to(Users.destroy({where:{Id:Id}}));
   if(err) return ReE(res,err,422);
   if(!delData){
     return ReE(res,"Id does not exist",422)
   }
   else{
     return ReS(res,"Users has been created successfully",200)
   }
}
module.exports.deleteUsers = deleteUsers;

//////Update users///////////
const updateUsers = async(req,res)=>{
     var Id= req.query.Id;
     var Name = req.body.Name;
     var Email = req.body.Email;
     var Phone_no = req.body.Phone_no;
     var Address = req.body.Address;
     var profile = req.file.originalname;
     console.log(profile)
     // var pic = `http://localhost:3000/profile/${profile}`
       // console.log(req.file)
     
   let err,updateData;
   [err,updateData] = await to (Users.update({Name:Name,Email:Email,Phone_no:Phone_no,Address:Address,Profile_photo:profile},{where:{Id:Id}}));
   if(err) return ReE(res,err,422);
   if(!updateData){
     return ReE(res,"Id is not exist",200);
   }
   if(updateData==1)
         {
          return ReS(res,'Users has been updated successfully',200);
         }
         else{
          return ReE(res,'Cannot update Users with SR_NO=${SR_NO}. Maybe Users was not found or req.body is empty!`',422);
          
         }      
   return ReS(res,updateData,200)
}
module.exports.updateUsers=updateUsers;