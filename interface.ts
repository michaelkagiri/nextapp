interface User {
    id:number,
    name:string,
    email?:string,
    isActive?:boolean,   //optional
}

let user1 : User = {
    id:1,
    name:"michael",
};

let user2 : User = {
    id:2,
    name :"alex",
    email: "alex@gmail.com",
    isActive:false
};

function displayUser (user:User) : void {
    console.log(`USERID:${user.id}`);
    console.log(`USERNAME:${user.name}`);
    if(user.email){console.log(`EMAIL:${user.email}`);
    }
    if(user.isActive !== undefined){
        console.log(`STATUS: ${user.isActive? "Active" : "not Active"}`);
    };
}

displayUser(user1);
displayUser(user2);