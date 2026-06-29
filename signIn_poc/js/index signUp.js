var signArry=[
           
	   obj= {
                name: "Ayzal",
                passwrd: "123",
                number: '12345',
	        gml: "aalem@gmail.com",
               }  

	    ]

function accountSign(){

          let userName = document.getElementById("name").value;
          let userPassword = document.getElementById("passwrd").value;
          let userNumber = document.getElementById("number").value;
	  let gmail = document.getElementById("gml").value;
	
          

          for(let i=0; i<signArry.length; i++) {
	if(signArry[i].name!=userName {
          document.getElementById("output").innerHTML="wrong name";
	  console.log("wrong name");
        }

	else if(signArry[i].passwrd!=userPassword){
          document.getElementById("output").innerHTML="wrong password";
	  console.log("wrong password");
	 } 
	else if (signArry[i].number!=userNumber) {
	    document.getElementById("output").innerHTML="Enter correct number";
	  console.log("Enter correct number");

	  }
	else if (signArry[i].gml!=gmail){
	    document.getElementById("output").innerHTML="Enter correct Gmail-Id";
	  console.log("Enter correct Gmail-Id");

	  }
         else {
	      document.getElementById("output").innerHTML="Succesfull..!";
	  console.log("Succesfull");
            }


}

          