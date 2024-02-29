//Ruth Djusthine Tenifrancia
// UV3l

function validatePassword(first, second){ //Checks if The two passwords match; the password has at least 8 characters; and the password has at least 1 number, 1 uppercase character, and 1 lowercase character 
    var firstBoolNum=false;
    var firstBoolUpper=false;
    var firstBoolLower=false;

    var strMyArray = first.split(""); //converts into array
    
    strMyArray.forEach(element => {
        if(element=="1" || element=="2" || element=="3" || element=="4" || element=="5" || element=="6" || element=="7" || element=="8" || element=="9" || element=="0"){
            firstBoolNum=true;
        }else{ //if not numerical
            
            if(element==element.toUpperCase()){ //if upper case
                firstBoolUpper=true;
            }
            if(element==element.toLowerCase()){ //if lower case
                firstBoolLower=true;
            }
        }
    });

    if(first==second && first.length > 7 && firstBoolNum==true && firstBoolUpper==true && firstBoolLower==true){ //if all conditions are met
        return true;
    }else{
        return false;
    }
}

function reversePassword(pass){ //Create a function that returns a reversed string of the password.
    var strMyArray = pass.split(""); //converts into array
    var reversedStr = "";
    for(let a=(strMyArray.length-1); a>=0; a--){
        reversedStr = reversedStr + strMyArray[a];
    } //reversed the string
    return reversedStr;
}

function storePassword(name, pass1, pass2){ //A function for storing the password to the object. 
    if(validatePassword(pass1, pass2)){
        return {name: name, newpassword: reversePassword(pass1)}
    }else{
        return {name: name, newpassword: pass1}
    }
} //returns an object

console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))