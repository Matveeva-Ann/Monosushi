import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, CollectionReference, DocumentData } from '@firebase/firestore';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { IPromoRequest, IPromoResponse } from '../../interface/promotionsInterface/promotions-interface';


@Injectable({
  providedIn: 'root'
})
export class PromotionsServiceService {
  private url = environment.BACKEND_URL;
  private api = {promotions: `${this.url}/promo`};
  private promoCollection!: CollectionReference<DocumentData>;

  constructor(
    private http:HttpClient,
    private afs:Firestore
    ){ 
    this.promoCollection = collection(this.afs, 'promo');
  }

  // getPromotions(): Observable<IPromoResponse[]>{
  //   return this.http.get<IPromoResponse[]>(this.api.promotions);
  // }

  // getOnePromotion(id: number): Observable<IPromoResponse>{
  //   return this.http.get<IPromoResponse>(`${this.api.promotions}/${id}`);
  // }

  // addPromo(promo: IPromoRequest): Observable<IPromoRequest>{
  //   return this.http.post<IPromoRequest>(this.api.promotions, promo);
  // }

  // deletePromo(id:number): Observable <void>{
  //   return this.http.delete<void>(`${this.api.promotions}/${id}`);
  // }

  // updatePromo(promo:IPromoRequest, id:number): Observable<IPromoResponse>{
  //   return this.http.patch<IPromoResponse>(`${this.api.promotions}/${id}`, promo);
  // }

  addPromo(promo: IPromoRequest){
    return addDoc(this.promoCollection, promo);
  }

  getPromotions(){
    return collectionData(this.promoCollection, { idField: 'id'});
  }

  updatePromo(promo:IPromoRequest, id:string){
    const promoDocRef = doc(this.afs, `promo/${id}`);
    return updateDoc(promoDocRef, { ...promo });
  }

  deletePromo(id:string){
    const promoDocRef = doc(this.afs, `promo/${id}`);
    return deleteDoc(promoDocRef);
  }

  getOnePromotion(id: string){
    const promoDocRef = doc(this.afs, `promo/${id}`);
    return docData(promoDocRef, {idField: 'id'})
  }

  // getOneGood(id: any){
  //   const goodDocRef = doc(this.afs, `goods/${id}`);
  //   return docData(goodDocRef, {idField: 'id'})
  // }


  // getGoodsByCategory (category: string){
  //   const goodsCollectionRef: CollectionReference = collection(this.afs, 'goods');
  //   const queryRef = query(goodsCollectionRef, where('categoryPath', '==', category));
  //   return collectionData(queryRef, { idField: 'id' });
  // }
}
