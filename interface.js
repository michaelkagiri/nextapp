var user1 = {
    id: 1,
    name: "michael",
};
var user2 = {
    id: 2,
    name: "alex",
    email: "alex@gmail.com",
    isActive: false
};
function displayUser(user) {
    console.log("USERID:".concat(user.id));
    console.log("USERNAME:".concat(user.name));
    if(user.email){console.log(`EMAIL:${user.email}`);
       }    
    if (user.isActive !== undefined) {
     console.log("STATUS: ".concat(user.isActive ? "Active" : "not Active"));
    }
    ;
}
displayUser(user1);
displayUser(user2);
