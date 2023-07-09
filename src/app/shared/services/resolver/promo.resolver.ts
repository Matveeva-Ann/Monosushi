import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IPromoResponse } from '../../interface/promotionsInterface/promotions-interface';
import { PromotionsServiceService } from '../promotionsService/promotions-service.service';

@Injectable({
  providedIn: 'root',
})
export class PromoResolver implements Resolve<IPromoResponse> {
  constructor(private promotionsService: PromotionsServiceService) {}

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPromoResponse> {
  //   return this.promotionsService.getOnePromotion(route.paramMap.get('id'));
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get('id');
    if (id !== null) {
      return this.promotionsService.getOnePromotion(id);
    } else {
      console.log('Відсутнє значення ID');
    }
  }
}
