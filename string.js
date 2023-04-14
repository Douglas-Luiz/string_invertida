//By Douglas_Luiz   

let palavra = prompt("Insira uma palavra !")
let arr = []
for (let i = palavra.length - 1; i >= 0; i--) {

    let rs = palavra[i];
    arr.push(rs)
 

    
}

console.log(arr.join(''))
