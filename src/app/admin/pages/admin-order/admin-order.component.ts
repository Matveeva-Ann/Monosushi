import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { IOrderResponse } from 'src/app/shared/interface/orderInterface/order-interface';
import { OrderServiceService } from 'src/app/shared/services/orderService/order-service.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}
@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('525ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AdminOrderComponent {
  public dataSource!: Array<IOrderResponse>
  public ordersArr!: Array<IOrderResponse>;
  columnsToDisplay = ['№', 'Контактні дані замовника', 'Спосіб оплати', 'Спосіб доставки', 'Адреса', 'Уточнення деталей', 'Статус замовлення'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: IOrderResponse[] | null;
 
  constructor(
    private orderService: OrderServiceService
  ){ }

  ngOnInit(): void {
    this.getAllGoods();
  }

  getAllGoods() {
    this.orderService.getOrders().subscribe((data) => {
      this.ordersArr = data as IOrderResponse[];
      this.dataSource = data as IOrderResponse[];
    });
  }
  btnStatus(status: string, element:IOrderResponse, id:string){
    if(status !== 'Виконане'){
      element.orderStatus = status;
      this.orderService.editOrder(element, id).then();
    }else{
      this.orderService.deleteOrder(id).then();
    }

  }
}
