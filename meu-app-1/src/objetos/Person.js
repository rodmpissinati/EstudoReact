import React from "react";

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log("Olá meu nome é: ", this.name);
    }

}

export default Person;