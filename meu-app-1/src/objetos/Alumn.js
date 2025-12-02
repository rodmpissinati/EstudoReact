import Person from "./person";
import React from "react";

class Alumn extends Person{

    constructor(name, age, turma){
        super(name, age);

        this.turma = turma;

    }

    greetings(){
        console.log("Olá meu nome é ",this.name, "e sou da turma", this.turma)
    }
} 

export default Alumn;