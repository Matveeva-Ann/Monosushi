import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROLE } from 'src/app/shared/constants/roles.constant';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { AccountService } from 'src/app/shared/services/account/account.service';
import { OrderServiceService } from 'src/app/shared/services/orderService/order-service.service';

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
    private router: Router
    ) {}

  
  closeFormCall(): void {
    this.willCall = false;
  }

  ngOnInit(): void {
    this.loadBasket();
    this.updateBasket();
    this.initLoginForm();

    console.log('Логін: admin@gmail.com Пароль: 123; Логін: nastya@gmail.com Пароль: 123 ')
  }

  initLoginForm():void{
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }

  loadBasket(): void {
    const allBasket = JSON.parse(localStorage.getItem('basket') as string);
    this.countProd = allBasket.length;
    this.priseProd = allBasket.reduce(
      (accum: number, elem: IGoodsResponse) =>
       accum + Number(elem.price) * elem.count, 0);
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
}
