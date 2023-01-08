import readline from "readline-sync";
import axios from "axios";
import terminalImage from "terminal-image";
import fs, { copyFileSync } from "fs";

// let main= ()=>{
//     var image;
//     let userName = readline.question("Enter your username: ")
//     console.log(userName)
//     axios
//     .get(`https://api.github.com/users/${userName}`)
//     .then((response)=>{
//         console.log(response.data.avatar_url)
//     })
// }
// main()

// let main =()=>{
//     let userName = readline.question("Enter your USername: ")
//     console.log(userName)
//     axios.get(`https://api.github.com/users/${userName}`)
//     .then((response)=>{
//         console.log(response.data.avatar_url)
//     })
//     }
//     main()

// let avatar=()=>{
//     let userName = readline.question("Enter your username: ")
//     console.log(userName)
//     axios.get(`https://api.github.com/users/${userName}`)
//     .then((response)=>{
//         console.log(response.data.avatar_url)
//     })

// }
// avatar()

// let avatar = () => {
//   let userName = readline.question("Enter your Github UserName: ");
//   console.log(userName);
//   axios.get(`https://api.github.com/users/${userName}`).then((response) => {
//     console.log(response.data.avatar_url);
//     let image = response.data.avatar_url;
//     axios.get(image, { responseType: "stream" }).then((response) => {
//       console.log(image);
//       response.data.pipe(fs.createWriteStream(`file.png`));
//     });
//     terminalImage.file("file.png").then((img) => {
//       console.log(img);
//     });
//   });
// };
// avatar(); //working



// let avatar = ()=>{
//     let userName = readline.question("Enter your github userName: ")
//     console.log(userName);
//     axios.get(`https://api.github.com/users/${userName}`)
//     .then((response)=>{
//         console.log(response.data.avatar_url)
    
//     })
// }

// avatar()


let avatar = ()=> {
    let username = readline.question("What is your userName: ")
    console.log(username)

    axios.get(`https://api.github.com/users/${username}`)
    .then((response)=>{
        console.log(response.data.avatar_url)
       let image = response.data.avatar_url
        axios.get(image, {responseType : "stream"})
        .then((response)=>{
            console.log(image)
            response.data.pipe(fs.createWriteStream(`file2.png`))
        })
        terminalImage.file("file2.png")
        .then((img)=>{
            console.log(img)
        })
    

    })
}
avatar() //not working