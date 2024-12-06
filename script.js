
function randomfacts() {
    let facts = [
        "Climate change is causing glaciers to melt faster than ever.",
        "The Earth's average temperature has risen by 1.2°C since 1880.",
        "Carbon dioxide levels are the highest they've been in 2 million years.",
        "Sea levels have risen by 8 inches since 1880.",
        "The last decade was the hottest in recorded history."
    ];
    let randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("random_fact").innerHTML = facts[randomIndex];

}
function validate(){
				//check name
				//check for the @ symbol in email
				// for any issues generate a msg-- return that msg is required
				// to check for the above set a flag to be true and then change to false if any form condition is not met
				
				let valid= true; //our flag
				let msge= "Incomplete form: ";
				// name validation
				if(document.getElementById("name").value ==""){
					msge+= "You need to fill name."; //building a message
					valid= false; // flag is false
					
				}
				//email validation
				if(document.getElementById("email").value ==""){
					msge+= "need to fill in email.";
					valid= false;
				}else if(document.getElementById("email").value !=""){
					inputE = document.getElementById("email").value;
					let symbol= inputE.indexOf("@"); //will return the index
					if(symbol<1){
						msge+="not a valid email";
						valid= false;
					}
				}
				// message validation
				if(document.getElementById("message").value ==""){
					msge+= "You need to enter a message."; //building a message
					valid= false; // flag is false
					
				}
				//show the msge only if value == false
				if(!valid){ //!valid means "not true"
					document.getElementById("page1_validation_message").innerHTML= msge;
				}
			return valid;
}