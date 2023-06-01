import { NgModule } from '@angular/core';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { BrowserModule } from '@angular/platform-browser';
import { TextMaskModule } from 'angular2-text-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthDialogModule } from "./components/header/auth-dialog/auth-dialog.module";
import { RegisterDialogModule } from "./components/header/register-dialog/register-dialog.module";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WillCallComponent } from './components/header/will-call/will-call.component';
import { BurgerMenuComponent } from './components/header/burger-menu/burger-menu.component';
import { NavPagesComponent } from './components/header/nav-pages/nav-pages.component';
import { BasketComponent } from './pages/basket/basket.component';

import { AddingPhotoComponent } from './shared/components/adding-photo/adding-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WillCallComponent,
    BurgerMenuComponent,
    NavPagesComponent,
    AddingPhotoComponent,
    BasketComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TextMaskModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    SharedModule,
    AuthDialogModule,
    RegisterDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
