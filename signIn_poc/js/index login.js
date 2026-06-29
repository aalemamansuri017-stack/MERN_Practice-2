var loginArr=[ 
	obj1= {
	   name:"Aalema",
	  pasword:"aalema123",
	  name:"Aalema",
          phone:'1234567890',
       },
    obj2= {
	  username:"techfromtechie",
	  pasword:"tech123",
	  name:"Tft",
          phone:'0987654321',

     }
]

function checkLogin(){
    
        let user = document.getElementById('username').value;
        let pwd = document.getElementById('pasword').value;

  
      for(let i=0; i<loginArr.length; i++){  
        if(loginArr[i].username==user){
          if(loginArr[i].pasword==pwd){
		document.getElementById("output").innerHTML = "Login Successful";
		alert('Login Successful');
		break;
	   } else {
		alert('Please enter correct password. or use forgot pwd');
                document.getElementById("output").innerHTML = "Please enter correct password. or use forgot pwd";
	         break;
	  }
	} else{
		alert('Not registered with us. Please signup');
		document.getElementById("output").innerHTML = "Not registered with us. Please signup";
		break;
	}
     }	
}



