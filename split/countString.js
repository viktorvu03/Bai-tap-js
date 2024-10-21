function CountString(){
    let count = document.getElementById("inputString").value;
   
    let characterCount ={
        letters :0,
        digits : 0,
        special:0,
        whitespace:0,
    }
    for(let char of count){
        if (/[a-zA-Z]/.test(char)) {
            characterCount.letters++;
        } else if (/\d/.test(char)) {
            characterCount.digits++;
        } else if (/\s/.test(char)) {
            characterCount.whitespace++;
        } else {
            characterCount.special++;
        }

    }
    document.getElementById("result").innerText = 
    `Số ký tự chữ cái: ${characterCount.letters}\n` +
    `Số ký tự số: ${characterCount.digits}\n` +
    `Số ký tự khoảng trắng: ${characterCount.whitespace}\n` +
    `Số ký tự đặc biệt: ${characterCount.special}`;
    
}