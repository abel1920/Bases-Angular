import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string='iroman';
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase(); //coloca la variable nombre en mayusculas
  }

  getHeroDesciption():void{
      `${this.name} -${this.age}`
  }
  changeHero():void{

     this.name='SpiderMan'

  }
  changeAge():void{

     this.age=20

  }

  Reset(){

    this.name='iroman'
    this.age=45
  }
}
