interface User {
    id:number,
    name:string,
    email:string,
    isActive?:boolean,   //optional
}

let user1 : User = {
    id:1,
    name:"michael",
    email:"michael@gmail.com",
};

let user2 : User = {
    id:1,
    name :"alex",
    email: "alex@gmail.com",
    isActive:false
};

function displayUser (user:User) : void {
    console.log(`USERID:${user.id}`);
    console.log(`USERNAME:${user.name}`);
    console.log(`USEREMAIL:${user.email}`);
    if(user.isActive !== undefined){
        console.log(`STATUS: ${user.isActive? "Active" : "not Active"}`);
    };
}

displayUser(user1);
displayUser(user2);