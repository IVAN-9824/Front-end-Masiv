import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register-storage',
  templateUrl: './register-storage.component.html',
  styleUrls: ['./register-storage.component.css']
})
export class RegisterStorageComponent implements OnInit {
  public formParent: FormGroup = new FormGroup({});
  storage= {
    id:null,
    iden:'',
    location:'',
    type:'',
  }
  constructor(private appService: AppService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initFormParent ();
  }

  createStorage (){
    if (this.formParent.valid){
    this.appService.crearCellar(this.formParent.value).subscribe(()=>this.onResetForm());
    }
  }
  initFormParent (): void{
    this.formParent=this.formBuilder.group({
      id         :        new FormControl(null),
      iden:        new FormControl(null, Validators.compose([Validators.required, Validators.minLength(10),Validators.pattern(/^[0-9]+$/)] )),
      location :        new FormControl(null, Validators.compose([Validators.required])),
      type :   new FormControl(null, Validators.compose([Validators.required])),
    });
  }

  onResetForm(){
    this.formParent.reset()
  }
  get iden(){ return this.formParent.get('iden')}
  get location(){ return this.formParent.get('location')}

}
