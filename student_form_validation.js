function emailvalidation(email){
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}

function ageValidation(age){
    // Convert age to a number
  var ageNumber = parseInt(age);

  // Check if ageNumber is a valid number
  if (isNaN(ageNumber)) {
    return false; // Age is not a number
  }
 if (ageNumber >18) {
        return true; 
  }

}

function validateFullName(fullname) {

    // Regular expression for validating first name (allows letters only)
    return (/^[a-zA-Z]+$/.test(fullname));
}