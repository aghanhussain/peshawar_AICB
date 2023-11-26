// ###############  Loops ###################

        // for loop
        // while loop
        // do while loop

// write your name ten times
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
    // console.log("Nasir Hussain")
let guests  = ['Munzir', 'Asad','Waheed','Dawood','SherKhan', 'Amanullah', 'Kaleemullah','Momin',
                'Rehman','NawazSharif', 'ImranKhan',
                'MaulanaFazlur Rehman','Bilawal Bhutto','ali','ahmed']


// for(let a=0; a<8; a++){
//     console.log(a, guests[a])

// }

// for(let a=0; a<guests.length; a++){
//     if(guests[a].length < 10){
//         console.log(`Mr. ${guests[a]} You are invited to my Weeding Ceremoney`)

//     }
// }

// for (let a =0; a<guests.length; a++){
//     if (guests[a].startsWith('A') || guests[a].startsWith('a'))
//     {
//         console.log(`Mr. ${guests[a]} You are invited to my Weeding Ceremoney`)
//     }
//     else{
//         console.log(`Mr. ${guests[a]} Not invited`)   
//     }

// }

for (let a =0; a<guests.length; a++){
    if (guests[a][0] ==="A" || guests[a][0]=='a'){
        console.log(`Mr. ${guests[a]} You are invited to my Weeding Ceremoney`)
    }
    else{
        console.log(`Mr. ${guests[a]} Not invited`)
    }

}

let txt  = prompt("Enter you text here")

for (let a=0; a<txt.length,a++){
    if (txt[a]==' ')
}
console.log(`The number of characters in your text are: ${txt.length}`)
console.log(`The number if words in your text are ${txt.split(' ').length}`)
