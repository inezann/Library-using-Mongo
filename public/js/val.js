function validate()
 {console.log("hai");
 console.log(document);
 uname.focus();
     let eMail1=document.getElementById("email").value;
    
     let uname1=document.getElementById('uname').value;
     let pwds=document.getElementById('psw').value;
     console.log(eMail1);
     let pwds1=document.getElementById('psw1').value;

 
 let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15})$/;
  let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((uname1=="")||(!isNaN(uname1)))
  {

    uname.focus();
    document.getElementById("uname").value="";
    document.getElementById('uspan').innerHTML="Sorry!! username empty";
    return false;
  }
  if((eMail1=="")||!(regexp.test(eMail1)))
  {
    document.getElementById('uspan').innerHTML="";
    email.focus();
    document.getElementById("email").value="";
    document.getElementById('espan').innerHTML="Sorry!! Invalid email format";
    return false;
  }
  if( !(regexp1.test(pwds)))
  {
  
    psw.focus();
    document.getElementById('espan').innerHTML="";
    document.getElementById("psw").value="";
    document.getElementById('pspan').innerHTML="Password is of 7-15 with Upper,lower and digit";
    return false;
  }

  if(pwds!=pwds1)
  {
    
    psw1.focus();
    document.getElementById('pspan').innerHTML="";
    document.getElementById("psw1").value="";
    document.getElementById('rspan').innerHTML="Sorry!! please confirm password";
    return false;
  }
  else{
alert("Registration successful");
    return true;

}}
function validate1()
 {console.log("hai");
 console.log(document);

     let eMaill1=document.getElementById("emaill").value;
      
     let pwdls=document.getElementById('pswl').value;
     console.log(eMaill1);
     let regexp1=/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15})$/;
 
   let regexp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if((eMaill1=="")||!(regexp.test(eMaill1)))
  {
    
    emaill.focus();
    document.getElementById("emaill").value="";
    document.getElementById('emailspan').innerHTML="Sorry!! Invalid email format";
    return false;
  }
  
  if( !(regexp1.test(pwdls)))
  {
  
    pswl.focus();
    document.getElementById("pswl").value="";
    document.getElementById('emailspan').innerHTML=" ";
    document.getElementById('pwdspan').innerHTML="Password is of 7-15 with Upper,lower and digit";
    return false;
  }
else{
alert("You are logged in....");
    return true;}
  }

function getdata()
{
  alert("We will look into it")
  return true;
}