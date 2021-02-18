let value= +prompt('NUmber: ');
console.log(typeof value);
if(typeof value!="number" || isNaN(value) ){
    console.log('Ops kajetsa, Vy oshiblis');
} else if(value%2===0){
    console.log('Even num');
} else console.log('Odd num');