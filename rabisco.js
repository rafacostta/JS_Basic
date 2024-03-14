// declarando array
let num = [1,2,3,4];
var num1 = new Array();
var num2 = Array();

// percorrendo array
for (let i =0; i < num.length; i++){
    console.log(num[i]);
}
num.forEach(function(n){
    console.log(n);
});

// for..of
for (n of num){
    console.log('For...of : ' + n);
}
