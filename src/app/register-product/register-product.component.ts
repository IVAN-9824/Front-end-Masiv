import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';


interface storage{
  id: string,
  iden: string,
  location: string,
  type: string,
};


@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})

export class RegisterProductComponent implements OnInit {

  storages: storage[]=[];
  public formParent: FormGroup = new FormGroup({});
  pattern: any ;
  ok: boolean =false;
  
  constructor(private appService: AppService, private formBuilder:FormBuilder) {
  
   }
  

  ngOnInit(): void {
    this.appService.ListStorage()
    .subscribe((dat: any)=>{ 
        this.storages=dat ;
    });
    this.initFormParent();
  }
  leerForm () : void{
    if (this.formParent.valid){
    this.appService.crearProduct(this.formParent.value).subscribe(()=>this.onResetForm());
    }
  }

  initFormParent (): void{
  this.formParent=this.formBuilder.group({
    id         :        new FormControl(null),
    guideNumber:        new FormControl(null, Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern(/^[0-9]+$/)] )),
    typeProduc :        new FormControl(null, Validators.compose([Validators.required])),
    productQuantity :   new FormControl(null, Validators.compose([Validators.required])),
    registrationDate :  new FormControl(null, Validators.compose([Validators.required])),
    deadLine :          new FormControl(null, Validators.compose([Validators.required])),
    shippingPrice :     new FormControl(null, Validators.compose([Validators.required])),
    idVehicle :         new FormControl(null, Validators.compose([Validators.required, Validators.pattern(this.pattern)])),
    idClient :          new FormControl(null, Validators.compose([Validators.required])),
    typeTranpor:        new FormControl(null, Validators.compose([Validators.required])),
    deliveryWarehouse:  new FormControl(null, Validators.compose([Validators.required])),
  })
  }

  onResetForm(){
    this.formParent.reset()
  }
  public validatorIdVheiculo(): boolean {
    if (this.formParent.get('typeTranpor')?.value== 'Maritimo'){
      const pattern2= (/[a-zA-Z]{3}[0-9]{3}\D$/);
      console.log(pattern2.test(this.formParent.get('idVehicle')?.value));
      if(pattern2.test(this.formParent.get('idVehicle')?.value)){
        console.log("OK- maritimo1");
        this.ok=true;
      return true;
      }
      console.log("OK- maritimo2");
    }else{
      const pattern2= (/^[a-zA-Z]{3}[0-9]{3}$/);
      console.log(pattern2.test(this.formParent.get('idVehicle')?.value));
      if(pattern2.test(this.formParent.get('idVehicle')?.value)){
        console.log("OK- mariti");
        this.ok=true;
        return true; 
    }
    }
    return false;
  }
  

  get guideNumber(){ return this.formParent.get('guideNumber')}
  get typeProduc(){ return this.formParent.get('typeProduc')}
  get productQuantity(){ return this.formParent.get('productQuantity')}
  get registrationDate(){ return this.formParent.get('registrationDate')}
  get deadLine(){ return this.formParent.get('deadLine')}
  get shippingPrice(){ return this.formParent.get('shippingPrice')}
  get idVehicle(){ return this.formParent.get('idVehicle')}
  get idClient(){ return this.formParent.get('idClient')}
  get typeTranpor(){ return this.formParent.get('typeTranpor')}
 
  

}


