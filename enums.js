var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var playerDirection = Direction.right;
console.log(playerDirection);
var Colors;
(function (Colors) {
    Colors["red"] = "RED";
    Colors["blue"] = "BLUE";
    Colors["grey"] = "GREY";
    Colors["pink"] = "PINK";
})(Colors || (Colors = {}));
var favourite = Colors.red;
console.log(favourite);
var Gun;
(function (Gun) {
    Gun["rifle"] = "shotgun";
    Gun["pistol"] = "glock";
    Gun["automatic"] = "AK-47";
})(Gun || (Gun = {}));
var good = Gun.pistol;
console.log(good);
