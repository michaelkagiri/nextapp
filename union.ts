// // union types
// let userId : string | number;

// userId = "chimpanzini";
// userId = 987654321;


function printId(id :string | number) : void{
    console.log(`the id is ${id}`);

    if(typeof id === "string"){
        console.log(`id is string, to uppercase ${id.toUpperCase()}`);
    }else{
        console.log(`id is number, multiply by 2 ${id * 2}`);
    };
    
};

printId(11);
printId("marble.200");