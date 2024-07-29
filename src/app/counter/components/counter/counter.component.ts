//creacion del componente mediante un decorador


import { Component, OnInit } from '@angular/core';

@Component({
  selector:'app-counter', // nombre como lo usaremos en el html
  template:` <h3>Counter: {{counter}} </h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
  // creacion de la clase
  export class CounterComponent{

    public title:string = 'Hola Mundo'; // Cambiar el título de la app
  public counter:number = 10; // Contador

  //metodo para imcrementar el contador
  increaseBy(value:number){
    // Incrementar el contador llamada a counter
    this.counter += value;
  }

  resetCounter(){
    this.counter=10;

  }
  }






