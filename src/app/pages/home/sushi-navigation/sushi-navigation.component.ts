import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sushi-navigation',
  templateUrl: './sushi-navigation.component.html',
  styleUrls: ['./sushi-navigation.component.scss']
})
export class SushiNavigationComponent {
  @Output() categoryRol = new EventEmitter<string>();

  public activeTab = 'all';

  clickElem(event:string):void{
    this.activeTab = event;
    this.categoryRol.emit(event);
  }
}
