function validation(){
    var username=document.form1.uname.value;
    var password=document.form1.pswd.value;
    if(username=="indumathi" && password=="indu123"){
            alert("Login successfully !!");
        }
    else{
        if(username==null || username=="")
        alert("Name must be filled out");
        else if(username.length<9)
        alert("Username length must be greater than 9");
        else if(password!="indu123")
        alert("Your password is incorrect");
        
    }
    
    
}