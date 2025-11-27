var name1 = "sandeep@m#";
name1 = name1.split("");

// travel -> starting position from the zeroth index -> name array ....

function nameCheck(){
name1.forEach((data)=>{
if(data != "!" && data != "#" && data != "@" && data != "&"){
console. log("the given character dosen't contain any special symbols " + data);
}
else{
console.log("the current character is equal to one of the given special character " + data);
}
})
};

nameCheck();


var name2 = "Jay@patel#";
name2 = name2.split("");

//  Travel -> Strating position from th zeroth index -> name array...

function nameCheck2(){
    name2.forEach((data) => {
        if(data !=  "!" && data !=  "#" && data !=  "@" && data !=  "&"){
            console.log("the given character dosen't contain any special symbols" + data);
        } else {
            console.log("the current character is equal to one of the given special character " + data);
        }
    })
};

nameCheck2();

