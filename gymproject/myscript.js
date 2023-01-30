function contact(){
	var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    
    // email id explression code 


		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Please enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Name field required only alphabet characters');
		}
		else if(email=='')
		{
			alert('Please enter your user email id');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(phone=='')
		{
			alert('Please enter your phone number');
		}
		
		
		
		
		else
		{				                            
               alert('Thank You for contacting us & you are redirecting to gym.html');
			   
		}
		window.location = "";
	}
	function clearFunc()
	{
		document.getElementById("name").value="";
		document.getElementById("email").value="";
		document.getElementById("phone").value="";
		
	}
