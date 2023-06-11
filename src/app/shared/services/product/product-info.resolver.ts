import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { IGoodsResponse } from '../../interface/goodsInterface/goods-interface';
import { GoodsServiceService } from '../goodsSevice/goods-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoResolver implements Resolve<IGoodsResponse> {

  constructor(
    private goodsService:GoodsServiceService
  ){}
  
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGoodsResponse> {
  //   return this.goodsService.getOneGood(Number(route.paramMap.get('id')))
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get('id');
  if (id !== null) {
    return this.goodsService.getOneGood(id);
  } else {
    console.log('Відсутнє значення ID');
  }
  }
}
