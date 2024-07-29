import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[]=['Spiderman','Iroman','Hulk','She hulk','Thor']
  public deleteHero?:string='';

  removeLastHero(){
    this.deleteHero =this.heroNames.pop()
  }

}
