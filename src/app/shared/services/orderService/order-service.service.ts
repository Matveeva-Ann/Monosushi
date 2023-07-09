import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, CollectionReference, DocumentData } from '@firebase/firestore';
import { Subject } from 'rxjs';
import { IOrderRequest } from '../../interface/orderInterface/order-interface';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  
  public changeBasket = new Subject<boolean>;
  private orderCollection!: CollectionReference<DocumentData>;

  constructor(
    private afs: Firestore
  ) {
    this.orderCollection = collection(this.afs, 'orders');
  }

  addOrders(order: IOrderRequest){
    return addDoc(this.orderCollection, order);
  }

  getOrders(){
    return collectionData(this.orderCollection, { idField: 'id' });
  }
  editOrder(order:IOrderRequest, id:string){
    const orderDocRef = doc(this.afs, `orders/${id}`);
    return updateDoc(orderDocRef, { ...order});
  }
 
  deleteOrder(id:string){
    const orderDocRef = doc(this.afs, `orders/${id}`);
    return deleteDoc(orderDocRef);
  }
}
