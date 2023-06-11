import { Injectable } from '@angular/core';
import { environment } from 'environment/environment';
import { HttpClient } from '@angular/common/http';
import { ICategoryRequest, ICategoryResponse } from '../../interface/categoryInterface/category-interface';
import { addDoc, collectionData, CollectionReference, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection, DocumentData } from '@firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class CategoryServiceService {
  private url = environment.BACKEND_URL;
  private api = { categories: `${this.url}/category` };
  private categoryCollection!: CollectionReference<DocumentData>;

  constructor(private http: HttpClient, private afs: Firestore) {
    this.categoryCollection = collection(this.afs, 'categories');
  }

  // getCategory(): Observable<ICategoryResponse[]>{
  //   return this.http.get<ICategoryResponse[]>(this.api.categories)
  // }

  // addCategory(category: ICategoryRequest): Observable<ICategoryRequest>{
  //   return this.http.post<ICategoryRequest>(this.api.categories, category);
  // }

  // deleteCategory(id:string): Observable<void>{
  //   return this.http.delete<void>(`${this.api.categories}/${id}`);
  // }

  // updateCategory(category:ICategoryRequest, id:string):Observable<ICategoryResponse>{
  //   return this.http.patch<ICategoryResponse>(`${this.api.categories}/${id}`, category);
  // }

  getCategory() {
    return collectionData(this.categoryCollection, { idField: 'id' });
  }

  addCategory(category: ICategoryRequest) {
    return addDoc(this.categoryCollection, category);
  }

  updateCategory(category: ICategoryRequest, id: string) {
    const categoryDocRef = doc(this.afs, `categories/${id}`);
    return updateDoc(categoryDocRef, { ...category });
  }

  deleteCategory(id: string) {
    const categoryDocRef = doc(this.afs, `categories/${id}`);
    return deleteDoc(categoryDocRef);
  }
}
