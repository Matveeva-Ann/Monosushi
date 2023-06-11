import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { addDoc, collectionData, CollectionReference, deleteDoc, doc, docData, Firestore, query, updateDoc,  } from '@angular/fire/firestore';
import { environment } from 'environment/environment';
import { Observable } from 'rxjs';
import { IGoodsRequest, IGoodsResponse } from '../../interface/goodsInterface/goods-interface';
import { collection, DocumentData, where } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoodsServiceService{
  private url = environment.BACKEND_URL;
  private api = {goods: `${this.url}/goods`}
  private goodsCollection!: CollectionReference<DocumentData>;
  constructor(
    private http: HttpClient,
    private afs: Firestore
    ) { 
    this.goodsCollection = collection(this.afs, 'goods');
  }

  // getGoods(): Observable<IGoodsResponse[]>{
  //   return this.http.get<IGoodsResponse[]>(this.api.goods)
  // }

  // getGoodsByCategory (name: string): Observable<IGoodsResponse[]>{
  //   return this.http.get<IGoodsResponse[]>(`${this.api.goods}?categoryPath=${name}`)
  // }

  // getOneGood(id: string): Observable<IGoodsResponse>{
  //   return this.http.get<IGoodsResponse>(`${this.api.goods}/${id}`);
  // }
  // addGoods(goods: IGoodsRequest): Observable<IGoodsRequest>{
  //   return this.http.post<IGoodsRequest>(this.api.goods, goods);
  // }
  // deleteGoods(id:string): Observable<void>{
  //   return this.http.delete<void>(`${this.api.goods}/${id}`);
  // }

  // updateGoods(goods:IGoodsRequest, id:string):Observable<IGoodsResponse>{
  //   return this.http.patch<IGoodsResponse>(`${this.api.goods}/${id}`, goods);
  // }

  
  addGoods(goods: IGoodsRequest){
    return addDoc(this.goodsCollection, goods);
  }

  getGoods(){
    return collectionData(this.goodsCollection, { idField: 'id' });
  }

  updateGoods(goods:IGoodsRequest, id:string){
    const goodDocRef = doc(this.afs, `goods/${id}`);
    return updateDoc(goodDocRef, { ...goods });
  }

  deleteGoods(id:string){
    const goodDocRef = doc(this.afs, `goods/${id}`);
    return deleteDoc(goodDocRef);
  }

  getOneGood(id: any){
    const goodDocRef = doc(this.afs, `goods/${id}`);
    return docData(goodDocRef, {idField: 'id'})
  }


  getGoodsByCategory (category: string){
    const goodsCollectionRef: CollectionReference = collection(this.afs, 'goods');
    const queryRef = query(goodsCollectionRef, where('categoryPath', '==', category));
    return collectionData(queryRef, { idField: 'id' });
  }
}

