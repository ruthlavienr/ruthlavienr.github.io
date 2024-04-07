import needle from 'needle';

needle.post(
    'http://localhost:3000/save-student',

    {
        stdnum: "1234511",
        fname: "Ruth",
        lname: "Tenifrancia",
        age: 19
    },

    {json: true},
        (err,res) => {
            if (err){
                console.error('Error making request: ', err);
                return;
               } 
          
               console.log('Response Body: ', res.body); //response body
              }
);

needle.post(
    'http://localhost:3000/update',

    {
        fname: "Mary Jane"
    },
    
    {json: true},
        (err,res) => {
            if (err){
                console.error('Error making request: ', err);
                return;
               } 
          
               console.log('Response Body: ', res.body); //response body
              }
);

needle.post(
    'http://localhost:3000/remove-user',

    {
        stdnum: "123457"
    },
    
    {json: true},
        (err,res) => {
            if (err){
                console.error('Error making request: ', err);
                return;
               } 
          
               console.log('Response Body: ', res.body); //response body
              }
);

needle.post(
    'http://localhost:3000/remove-all-user',

    {
        
    },
    
    {json: true},
        (err,res) => {
            if (err){
                console.error('Error making request: ', err);
                return;
               } 
          
               console.log('Response Body: ', res.body); //response body
              }
);