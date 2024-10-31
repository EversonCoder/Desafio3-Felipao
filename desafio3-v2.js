class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type

    }
    
   atacar(){
    let ataque;

    if(this.type == "mago"){
        ataque =  "magia";

    }
    else if(this.type === "guerreiro"){
        ataque = "espada";
    }
    else if(this.type ==="monge"){
     ataque = "artes marciais"
    }
    else if(this.type === "ninja"){
    ataque = "shuriken";
    }
    else{
        ataque= "pal e pedra"
    }
    console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}

let hero1 = new hero ("Merlin", 30, "mago");
let hero2 = new hero ("Bills", 75, "monge");
let hero3 = new hero ("Jing", 39, "guerreiro");
let hero4 = new hero ("Naruto", 17, "ninja");
let hero5 =  new hero ("tonhão", 35, "morador de rua");

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();
hero5.atacar();