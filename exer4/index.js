//Ruth Djusthine E. Tenifrancia
//UV-3L

//Imports
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail.js';
import { appendFileSync } from 'node:fs';

function generateUniqueID(fname,lname){ //function the gets the first letter of first name, lowercase of last name, and 8 characters of randomized uuid
    const str = 'bobbyhadz.com';
    const letter = str.charAt(0);
    const lowLname = lname.toLowerCase();
    var genUnique = uuidv4();
    genUnique = genUnique.substring(0, 8)
    return(letter.concat(lowLname,genUnique))
}


function addAccount(arr){ //this function add account to the users.txt
    var fname= false;
    var lname= false;
    var email= false;
    var age= false;
    var j=-1;
    var k=-2;
    
    if(arr.length==4 && arr[0] !== '' && arr[1] !== '' && arr[2] !== '' && arr[3]>17){ //validation
        if(validator.isEmail(arr[2])){ //checks if email
            var data = arr[0] + ',' + arr[1] + ',' + arr[2] + ',' + arr[3] + ',' + generateUniqueID(arr[0],arr[1])       //data variable 
            appendFileSync("users.txt", data + '\n', {'flags': 'a+'}); //appends to file
            return(true);
        }else{
            return(false);
        }
    }else{
        return(false);
    }
    
    
}


export default {generateUniqueID, addAccount};