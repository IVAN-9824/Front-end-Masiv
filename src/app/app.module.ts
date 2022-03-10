import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterStorageComponent } from './register-storage/register-storage.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { HomeComponent } from './home/home.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';


const routes: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'createuser', component:RegisterUserComponent},
  {path: 'createproduct', component:RegisterProductComponent},
  {path: 'createstorage', component: RegisterStorageComponent},
  {path: 'showProducts', component: ShowProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    RegisterStorageComponent,
    RegisterProductComponent,
    HomeComponent,
    ShowProductsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
