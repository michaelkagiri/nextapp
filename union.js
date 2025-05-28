// // union types
// let userId : string | number;
// userId = "chimpanzini";
// userId = 987654321;
function printId(id) {
    console.log("the id is ".concat(id));
    if (typeof id === "string") {
        console.log("id is string, to uppercase: ".concat(id.toUpperCase()));
    }
    else {
        console.log("id is number, multiply by 2: ".concat(id * 2));
    }
    ;
}
;
printId(11);
printId("marble.200");
var firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
console.log(firstname.valueOf()); //Danny
