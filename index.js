var cats= ["Milo","Otis","Garfield"];

function  destructivelyAppendCat(name){
cats.push(name);
return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}
function appendCat(name){
    var one=[...cats,name];
    return one;
}
function prependCat(name){
    var two=[name,...cats];
    return two;
}
function removeLastCat(){
    var three=cats.slice(0,cats.length-1)
    return three;
}
function removeFirstCat(){
    var four=cats.slice(1)
    return four;
}

    
