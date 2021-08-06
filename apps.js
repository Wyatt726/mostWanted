"use strict"


//Menu functions.
//Used for the overall flow of the application.
/////////////////////////////////////////////////////////////////
//#region 

// app is the function called to start the entire application
function app(people){
 
  console.log (" Enter 1 for search by Last  Name \n", "Enter 2 for search by First Name \n",
  "Enter 3 for search by  EyeColor \n","Enter 4 for search by  Occupation\n",
  "Enter 5 for search by Gender \n", "Enter 6 for search by First name and Last Name \n" , "Enter 7 for search by EyeColor Occupation and Gender \n", "Enter 8 to quite");
  let searchType = promptFor( " Enter your choice from the menu");
  
  let searchResults;
  switch(searchType){
    case "1":
      searchResults = searchByLastName(people);
      break;
    case "2":
      searchResults = searchByFirstName(people); 
      break;    
    case "3":
      searchResults = searchByEyeColor(people);
      break;
    case "4":
      searchResults = searchByOccupation(people);
      break;
    case "5":
      searchResults = searchByGender(people);
      break;
    case "6":
      searchResults = searchByFirstAndLastName(people);
      break;
    case "7":
      searchResults = searchByEyeAndOccupationAndGender(people);
      break;
    case "8":  
       console.log("Thank you for using this program")
    return;
    
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }


 let displayOption;
 
    for (let i = 0; i < person.length; i++) {
    displayOption = promptFor("Found " + person[i].firstName + " " + person[i].lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'", autoValid);
    let foundList = person[i].firstName ;
    console.log (foundList + " ");
     }

  // switch(displayOption){
  //   case "info":
  //   // TODO: get person's info
  //   break;
  //   case "family":
  //   // TODO: get person's family
  //   break;
  //   case "descendants":searchResults
  //   // TODO: get person's descendants
  //   break;
  //   case "restart":
  //   app(people); // restart
  //   break;
  //   case "quit":
  //   return; // stop execution
  //   default:
  //   return mainMenu(person, people); // ask again
  // }
  return mainMenu(person, people); // ask again
}

//#endregion

//Filter functions.
//Ideally you will have a function for each trait.
/////////////////////////////////////////////////////////////////
//#region 



//nearly finished function used to search through an array of people to find matching first and last name and return a SINGLE person object.
// function searchByName(people){
//   let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
//   let firstName = promptFor("What is the person's first name?", autoValid);
//   let lastName = promptFor("What is the person's last name?", autoValid);

//   let foundPerson = people.filter(function(potentialMatch){
//     if(potentialMatch.firstName === firstName && potentialMatch.lastName === lastName){
//       return true;
//     }
//     else{
//       return false;
//     }
//   })
// //   // TODO: find the person single person object using the name they entered.
//   return foundPerson[0];
// }

// function to search through an array of people to find matching last name
function searchByLastName(people){
  let occupationSearch = promptFor("What is the Last Name you searching for?", autoValid);
  let foundPeople = people.filter(function(potentialMatch){
    if(potentialMatch.lastName == occupationSearch){
      return true;
    }
    else{
      return false;
    }
   
 })
  // TODO: find the person us
  return foundPeople;
  
}


// function to search through an array of people to find matching first name
function searchByFirstName(people){
  let occupationSearch = promptFor("What is the First Name you searching for?", autoValid);
  let foundPeople = people.filter(function(potentialMatch){
    if(potentialMatch.firstName == occupationSearch){
      return true;
    }
    else{
      return false;
    }
   
 })
  // TODO: find the person us
  return foundPeople;
  
}


// unfinished function to search through an array of people to find matching eye colors. Use searchByName as reference.
  function searchByEyeColor(people){
  let eyeColorSearch = promptFor("What eye colored person list you searching for?", autoValid);
  let foundPeople = people.filter(function(potentialMatch){
    if(potentialMatch.eyeColor == eyeColorSearch){
      return true;
    }
    else{
      return false;
    }
   
 })
  // TODO: find the person us
  return foundPeople;
  
}


//TODO: add other trait filter functions here.



// function to search through an array of people to find matching Occupation
function searchByOccupation(people){
  let occupationSearch = promptFor("What Occupation person list you searching for?", autoValid);
  let foundPeople = people.filter(function(potentialMatch){
    if(potentialMatch.occupation == occupationSearch){
      return true;
    }
    else{
      return false;
    }
   
 })
  // TODO: find the person us
  return foundPeople;
  
}



// function to search through an array of people to find matching Occupation
function searchByGender(people){
  let genderSearch = promptFor("What gender person list you searching for?", autoValid);
  let foundPeople = people.filter(function(potentialMatch){
    if(potentialMatch.gender == genderSearch){
      return true;
    }
    else{
      return false;
    }
   
 })
  // TODO: find the person us
  return foundPeople;
  
}


function searchByFirstAndLastName(people){
  let lastNameFunction = searchByLastName(people);
  let lastAndFirstNameFunction = searchByFirstName(lastNameFunction);
  return lastAndFirstNameFunction ;


}



function searchByEyeAndOccupationAndGender(people){
  let eyeColorFunction = searchByEyeColor(people);
  let eyeColorAndgenderFunction = searchByGender(eyeColorFunction);
  let eyeGenderAndOccupationFunction = searchByOccupation(eyeColorAndgenderFunction);
  return eyeGenderAndOccupationFunction;
}

// 
//#endregion

//Display functions.
//Functions for user interface.
/////////////////////////////////////////////////////////////////
//#region 

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display.
  alert(personInfo);
}

//#endregion



//Validation functions.
//Functions to validate user input.
/////////////////////////////////////////////////////////////////
//#region 

//a function that takes in a question to prompt, and a callback function to validate the user input.
//response: Will capture the user input.
//isValid: Will capture the return of the validation function callback. true(the user input is valid)/false(the user input was not valid).
//this function will continue to loop until the user enters something that is not an empty string("") or is considered valid based off the callback function(valid).
function promptFor(question, valid){
  let response;
  let isValid;
  do{
    response = prompt(question).trim();
    isValid = true;
    //isValid = valid(response);
  } while(response === ""  ||  isValid === false)
  return response
}

// helper function/callback to pass into promptFor to validate yes/no answers.
function yesNo(input){
  if(input.toLowerCase() == "yes" || input.toLowerCase() == "no"){
    return true;
  }
  else{
    return false;
  }
}

// helper function to pass in as default promptFor validation.
//this will always return true for all inputs.
function autoValid(input){
  return true; // default validation only
}

// helper function to validate the name input

// function nameValidation(input){

// if(input != null && typeof input === "string" && input.length > 0 && isNaN(parseFloat(input)) ){
//   return true;
// }
// else{
//   return false;
// }
// }
//
//Unfinished validation function you can use for any of your custom validation callbacks.
//can be used for things like eye color validation for example.
function customValidation(input){
  
}

//#endregion