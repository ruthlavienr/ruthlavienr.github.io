import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import isEmail from 'validator/lib/isEmail.js';
import { appendFileSync } from 'node:fs';

function generateUniqueID(fname,lname){
    const str = 'bobbyhadz.com';
    const letter = str.charAt(0);
    const lowLname = lname.toLowerCase();
    var genUnique = uuidv4();
    genUnique = genUnique.substring(0, 8)
    return(letter.concat(lowLname,genUnique))
}


function addAccount(arr){
    var fname= false;
    var lname= false;
    var email= false;
    var age= false;
    var j=-1;
    var k=-2;
    
    console.log(arr.length)
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    if(arr.length==4 && arr[0] !== '' && arr[1] !== '' && arr[2] !== '' && arr[3]>17){
        
        console.log(true)
        if(validator.isEmail(arr[2])){
            console.log(true)
            var data = arr[0] + ',' + arr[1] + ',' + arr[2] + ',' + arr[3] + ',' + generateUniqueID(arr[0],arr[1])        
            appendFileSync("users.txt", data + '\n', {'flags': 'a+'});
            return(true);
        }else{
            console.log(false)
            return(false);
        }
    }else{
        
        console.log(false)
        return(false);
    }
    
    
}


export default {generateUniqueID, addAccount};