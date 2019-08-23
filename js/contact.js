function validateContactForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var subject=document.getElementById("subject").value;
    var check=true;
    var stringPattern =/^[abc]*$/;
    var ncheck=stringPattern.test(name);
    var scheck=stringPattern.test(subject);
    if(name==null || name=="")
    {
        alert("Name must be filled out!!");
        check=false;
    }else if(ncheck==false){
        alert("Invalid name");
        check=false;
    }
    if(email==null||email==""){
       alert("Email must be filled out!!");
       check=false;
    }
    if(scheck==false){
        alert("Invalid subject");
        check=false;
    }
    return check;
}