class Player{
    constructor(name,type){
        this.name = name;
        this.type = type;
    }
    samplefunction1(){
        console.log(this.name, this.type);
    }
}
class Wizard extends Player{
    constructor(name,type){
        super(name,type);

    }
    play(){
        console.log('play');
    }
}

var obj1 = new Wizard('hi','hello');
obj1.play();