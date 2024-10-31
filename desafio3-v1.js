class hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;

    }
    
   atacar(){
    let ataque;

    switch (this.type){
        case "mago":
            ataque = "usou magia";
            break;
        case "guerreiro":
            ataque= "espada"
            break;
        case "monge":
            ataque = "artes marciais";
            break;
        case "ninja":
            ataque = "usou shuriken";
            break;
        default:
            ataque = "pal e pedra";
            break;
    }
    console.log(`O ${this.type} atacou usando ${ataque}`);
}
}

let hero1 = new hero ("Hylos", 15, "mago");
let hero2 = new hero ("Jing", 59, "monge");
let hero3 = new hero ("Bils", 15, "guerreiro");
let hero4 = new hero ("Naruto", 15, "ninja");

hero1.atacar();
hero2.atacar();
hero3.atacar();
hero4.atacar();