import { Component, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ROLE } from 'src/app/shared/constants/roles.constant';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { OrderServiceService } from 'src/app/shared/services/orderService/order-service.service';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public willCall = false;
  public countProd = 0;
  public priseProd = 0;
  public showBasketProduct = false;
  public enteredUrl = '';
  public loginWindow = false;
  public loginForm!: FormGroup;

  constructor(
    private orderService: OrderServiceService,
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private dialog: MatDialog,
    ) {}


  closeFormCall(): void {
    this.willCall = false;
  }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
    this.initLoginForm();
    console.log('Логін: admin@gmail.com Пароль: 123123; Логін: user@gmail.com Пароль: 123123');
  }

  ngDoCheck(): void {
    this.loadBasket();
  }
 
  initLoginForm():void{
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  loadBasket(): void {
    const allBasket = JSON.parse(localStorage.getItem('basket') as string);
    if (allBasket !== null){
      this.countProd = allBasket.length;
      this.priseProd = allBasket.reduce(
        (accum: number, elem: IGoodsResponse) =>
         accum + Number(elem.price) * elem.count, 0);
    }else{
      this.countProd = 0;
      this.priseProd = 0;
    } 
  }

  login():void{
    this.accountService.login(this.loginForm.value).subscribe(data=>{
      if (data.length > 0){
        const user = data[0];
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (user.role === ROLE.USER){
          this.router.navigate([`/cabinet/userData/${user.id}/userData`]);
        } else if (user.role === ROLE.ADMIN){
          this.router.navigate([`/admin/promotions`]);
        }
        this.loginWindow = false;
        this.loginForm.reset();
      }
    })
  }

  updateBasket(): void {
    this.orderService.changeBasket.subscribe(() => {
      this.loadBasket();
    });
  }

  changeBasket():void{
    this.loadBasket();
  }

  closeBasket():void{
    this.showBasketProduct = false;
  }

  closeWindow(): void{
    this.loginWindow = false;
  }

  openLoginDialog():void{
    const currentUser = JSON.parse( localStorage.getItem('currentUser') as string );
    if (currentUser === null){
      this.dialog.open(AuthDialogComponent, {
        backdropClass: 'dialog-back',
        panelClass: 'auth-dialog',
        autoFocus: false,
        disableClose: false,
        enterAnimationDuration: 500,
        exitAnimationDuration: 500,
        hasBackdrop: true,
      })
    } else if (currentUser.role === ROLE.USER){
      this.router.navigate([`/cabinet/userData`]);
    } else if( currentUser.role === ROLE.ADMIN){
      this.router.navigate(['/admin/promotions'])
    }

  }
}
