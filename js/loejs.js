window.setInterval(clock,1000);
function clock(){
    document.getElementById('clock').innerHTML=Date();
}
function validateForm(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("number").value;
    var check=true;
    var numberPattern = /^[0-9]*$/;
    var stringPattern =/^[abc]*$/;
    var presult= numberPattern.test(phone);
    var sresult=stringPattern.test(name);
    if(name==null || name=="")
    {
        alert("Name must be filled out!!");
       check=false;
    }else if(sresult==false){
        alert("Invalid name");
        check=false;
    }
    if(email==null||email==""){
       alert("Email must be filled out!!");
       check=false;
    }
    if(phone==null||phone==""){
        alert("Phone number must be filled out!!");
       check=false;
    }else if(phone.length!=10 && phone.length!=11||presult==false){
        alert("Invalid phone number");
        check=false;
    }
    return check;
}



