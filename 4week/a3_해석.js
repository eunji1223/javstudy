//문제풀이 해 주신 코드(공부 후 진행)
const readline = require("readline");
const rl = readline.createInterface({input: Process.stdin, output: Process.stdout});

let input;
let result = "";
const onInput= (value) => (input = parseInt(value));

const star = (i,j,num) => {
    if(i%3===1 && j%3 ===1){
        result+=" ";
    }
    else{
        if(num===1){
            result += "*";
        }
        else{
            star(Math.floor(i/3),Math.floor(j/3),Math.floor(num/3));
        }
    }
};

const onClose = () => {
    for(let i=0; i<input; i++){
        for(let j = 0; j<input; j++){
            star(i,j,input);
        }
        result += "\n";
    }
    console.log(result);
    Process.exit();
};

rl.on("line",onInupt).on("close",onClose)