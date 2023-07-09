import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { ROLE } from 'src/app/shared/constants/roles.constant';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { IOrderRequest } from 'src/app/shared/interface/orderInterface/order-interface';
import { OrderServiceService } from 'src/app/shared/services/orderService/order-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public orderProducts: Array<IGoodsResponse> = [];
  public priseProd = 0;
  public styleBasket = false;
  public datepicker!: MatDatepicker<any>;
  public startTime: Date = new Date();
  public endTime: Date = new Date();
  public intervalMinutes: number = 15;
  public formOrder!: FormGroup;
  methodDelivery!: FormControl;

  constructor(
    private orderService: OrderServiceService,
    private fb: FormBuilder,
    public router: Router,
    ) {}

  ngOnInit(): void {
    this.loudProducts();
    this.startTime.setHours(11, 0, 0, 0);
    this.endTime.setHours(22, 30, 0, 0);
    this.initForm();
    this.subscribeToMethodDelivery();
  }

  initForm(){
    const currentUser = JSON.parse( localStorage.getItem('currentUser') as string );
    
    this.formOrder = this.fb.group({
      numberDevices: ['1', [Validators.required]],
      trainingHolders: ['Навчальні тримачі', [Validators.required]],
      paymentMethod: ['Готівкою', [Validators.required]],
      methodDelivery: ['доставка', [Validators.required]],
      advance:[ false ],
      userName: [currentUser?.firstName, [Validators.required]],
      userPhone: [currentUser?.phoneNumber, [Validators.required]],
      userStreet: [null, [Validators.required]],
      userHouseNumber: [null, [Validators.required]],
      userEntrance: [null],
      userApartment: [null],
      pickUpAddress: [null],
      deliveryDate: [null],
      deliveryInterval: ['time interval'],
      callMe: [null],
      userComment: [null],
      commentKitchen: [null],
      orderProducts: [null]
    })      
  }

  subscribeToMethodDelivery(): void {
    this.formOrder.get('methodDelivery')?.valueChanges.subscribe(value => {
      const pickUpAddressControl = this.formOrder.get('pickUpAddress');
      const userStreetControl = this.formOrder.get('userStreet');
      const userHouseNumberControl = this.formOrder.get('userHouseNumber');
    
      if (value === 'сомовивіз') {
        pickUpAddressControl?.setValidators([Validators.required]);
        userStreetControl?.clearValidators();
        userHouseNumberControl?.clearValidators();
      } else {
        pickUpAddressControl?.clearValidators();
        userStreetControl?.setValidators([Validators.required]);
        userHouseNumberControl?.setValidators([Validators.required]);
      }

      pickUpAddressControl?.updateValueAndValidity();
      userStreetControl?.updateValueAndValidity();
      userHouseNumberControl?.updateValueAndValidity();
    });
  }


  addOrder(){
    this.formOrder.patchValue({
      orderProducts: this.orderProducts
    });
  
    const userDataOrder:IOrderRequest = {
      numberDevices:  this.formOrder.value['numberDevices'],
      trainingHolders: this.formOrder.value['trainingHolders'],
      paymentMethod: this.formOrder.value['paymentMethod'],
      methodDelivery: this.formOrder.value['methodDelivery'],
      advance: this.formOrder.value['advance'],
      userName: this.formOrder.value['userName'],
      userPhone: this.formOrder.value['userPhone'],
      address: '',
      deliveryDate: this.formOrder.value['deliveryDate'],
      deliveryInterval: this.formOrder.value['deliveryInterval'],
      callMe: '',
      userComment: this.formOrder.value['userComment'],
      commentKitchen: this.formOrder.value['commentKitchen'],
      orderProducts: this.formOrder.value['orderProducts'],
      orderStatus: 'Нове',
      orderNumber: 0,
    }
    userDataOrder.orderNumber = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000;

    if(this.formOrder.value['methodDelivery'] === 'сомовивіз'){
      userDataOrder.address = this.formOrder.value['pickUpAddress']
    } else{
      userDataOrder.address = `вул. ${this.formOrder.value['userStreet']}, буд.${this.formOrder.value['userHouseNumber']}, підїзд ${this.formOrder.value['userEntrance']}, кв.${this.formOrder.value['userApartment']}`
    }
    if(this.formOrder.value['callMe']){
      userDataOrder.callMe = 'Передзвонити';
    } else{
      userDataOrder.callMe = 'Можна не передзвонювати';
    }
    if(this.formOrder.value['trainingHolders'] === 'Навчальні тримачі'){
      userDataOrder.trainingHolders = '0';
    }
    userDataOrder.priseProd = this.priseProd;
    console.log(userDataOrder)
    this.orderService.addOrders(userDataOrder).then(()=>{});
    localStorage.removeItem('basket');
    this.router.navigate(['cabinet/userData']);

  }

  loudProducts(): void {
    this.orderProducts = JSON.parse(localStorage.getItem('basket') as string);
    if (this.orderProducts !== null) {
      this.priseProd = this.orderProducts.reduce(
        (accum: number, elem: IGoodsResponse) =>
          accum + Number(elem.price) * elem.count,0
      );
      this.orderService.changeBasket.subscribe(() => {
        this.loudProducts();
      });
    }
  }

  deleteProduct(product: IGoodsResponse): void {
    const index = this.orderProducts.findIndex(
      (item) => item.id === product.id
    );
    this.orderProducts.splice(index, 1);
    localStorage.setItem('basket', JSON.stringify(this.orderProducts));
    this.loudProducts();
  }

  dateFilter = (date: Date | null): boolean => {
    if (date === null) { return false }
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    return date >= currentDate;
  };

  
  public generateTimeIntervals(startTime: Date, endTime: Date, intervalMinutes: number): string[] {
    const intervals: string[] = [];
    const currentInterval = new Date(startTime);
  
    while (currentInterval < endTime) {
      const start = currentInterval.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      currentInterval.setMinutes(currentInterval.getMinutes() + intervalMinutes);
      const end = currentInterval.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const interval = `${start} - ${end}`;
      intervals.push(interval);
    }
  
    return intervals;
  }
  
  colorControl = new FormControl('time interval' as ThemePalette);
  chooseControl = new FormControl('choose' as ThemePalette);
}
