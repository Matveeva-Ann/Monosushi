import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.scss']
})
export class AdminNavComponent {

  public activeTab = '';

  constructor(
    public router: Router
  ){}

  ngOnInit(): void {

  }
  click(clickElem:string):void{
    this.activeTab=clickElem;
  }

  logout(): void{
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
  }

}
