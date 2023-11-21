function validateFunction(){
    let Email = document.getElementById("Email").value
    let Confirm = document.getElementById("Confirm").value
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let Agree = document.getElementById("Agree").checked
    if(!Email || !Confirm || !firstName || !lastName || !Agree){
        alert("All fields must be filled")
    }
    if(!Email.endWith("@gmail.com")){
        alert("Must end with @gmail.com")
    }
    if(firstName.length < 6 || firstName.length > 20){
        alert("Name must be between 6 - 20 characters")
    }
    if(lastName.length < 5 || lastName > 20){
        alert("Name must be between 5 - 20 characters")
    }
    else{
        alert("Subscription successful")
    }
}