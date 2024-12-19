function canMouseEat(direction, room) {

    let  mX, mY;

    room.forEach((i, a) => {
        i.forEach((j, b) => {
            if (j == "m") {
                mX = b;
                mY = a;
            }
        });
    })


    try {
        switch (direction) {
            case "up":
                return room[mY - 1][mX] == "*";
                break;

            case "down":
                return room[mY + 1][mX] == "*";
                break;

            case "left":
                return room[mY][mX - 1] == "*";
                break;

            case "right":
                return room[mY][mX + 1] == "*";
                break;
        }
    } catch (error) {
        return false;
    }
}
