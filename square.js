class Square {
    x;
    y;
    visited = false;
    wall = false;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

     
    visit(){
        if(this.visited){
            this.visited = false;
        }
        else {
            this.visited = true;
        }
        return this;
    }

    wall(){
        if(this.wall){
            this.wall = false;
        }
        else {
            this.wall = true;
        }
        return this;
    }

    test(){
        console.log("test from class");
    }

}
