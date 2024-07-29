import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
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
