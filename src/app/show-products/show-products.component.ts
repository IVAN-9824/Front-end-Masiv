import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


interface product{
  id: string,
  guideNumber: string, 
  typeProduc: string,
  productQuantity: string,
  registrationDate: Date,
  deadLine: Date,
  shippingPrice: string,
  idClient: string,
  idVehicle: string,
  typeTranpor: string,
  deliveryWarehouse: string,
  discount: string,
};

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: product[]=[];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.showproducts();
  }

  showproducts (){
    this.appService.listProduct()
    .subscribe((dat: any)=>{ 
      //dat.forEach((element :any ) => {
        this.products = dat;
        console.log(this.products);
      //});
    });
  }

}
