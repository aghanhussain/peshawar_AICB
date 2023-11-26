//  ### TASK ###

// you need take a 5 username as input from user
// and add usernames in an array of usernames 
// before adding make sure the username is a valid username
//    - validity: 
//        - username can not be admin or Admin or ADMIN  
//        - username must be morethan 5 and less than 20 characters
           

// create an empty array : usernames
// run a for loop five times
// input username
// inside for loop put check for validiy
// if valid then add username in usernames array
// last console the usrnames arrray

let userlist = []
for(let a=0; a<5; a++){
    let username = prompt("create a username")

    if (username!="admin"  && username!="Admin"  && username!="ADMIN" ){
        if (userlist.includes(username))
        {
            alert("User name not available")
        }
        else
        {
            if (username.length>=5 && username.length<=20){
                userlist.push(username)
                alert("Username created")
            }
            else{
                alert("Invalid user name length error")
            }
        }
    }
    else{
        alert("Invalid username admin")
    }
}    
console.log(userlist)


// let arr= ["A", "B","C","D","E"]  // C

// let char = prompt("Enter a char").toUpperCase()

// if ((arr.includes(char))){
//      console.log("Already a member")
// }
// else{
//     arr.push(char)
// }
// console.log(arr)
    

