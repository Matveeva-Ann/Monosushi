import { Component, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGoodsResponse } from 'src/app/shared/interface/goodsInterface/goods-interface';
import { GoodsServiceService } from 'src/app/shared/services/goodsSevice/goods-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private eventSubscription!: Subscription;
  public userProducts: IGoodsResponse[] = [];
  private categoryRolClick!: string;

  constructor(private goodsService: GoodsServiceService) {}

  ngOnInit(): void {
    this.loadGoods();
  }

  categoryRol(categoryRol: string): void {
    this.categoryRolClick = categoryRol;
    this.eventSubscription = this.goodsService
      .getGoodsByCategory('roli')
      .subscribe((data) => {
        this.userProducts = data.filter(
          (item) => {
            if (this.categoryRolClick === item.categoryRol){
              return true
            } else if (this.categoryRolClick === 'all'){
              return true;
            } else{
              return false;
            }
          }
        );
      });
  }

  loadGoods() {
    this.eventSubscription = this.goodsService
      .getGoodsByCategory('roli')
      .subscribe((data) => {
        this.userProducts = data;
      });
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
  }
}
