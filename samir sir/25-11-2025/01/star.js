

//  Data Type -> String..
var email = "abc@gmail.com";
var txt = "@gmail.com";

//  Array data Type  -> conversion process (string to array)

email = email.split("@"); // always use this empty string to convert each character into array..
console.log(email);

txt = txt.split("");
console.log(txt);


//  Comprarison -> index travelling  ->  starting position  ->  last index of email....
// ending point decide -> mathematical p+operation  ->  emai;l.length - txt.length...

var j = 9;

function emailCheck(){
for(let i = email.length-1; i>(email.length - txt.length); i--){
    if(email[i] == txt[j]){
        console.log("Both character in the given array are equal" + email[i] + " " + txt[j]);
        --j;
    } else{
        alert("the particular index contain a character which is not same" + email[i] + " " + txt[j]);
        j=9;
    }
}
}

emailCheck();