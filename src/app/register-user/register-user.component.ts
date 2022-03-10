import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public formParent: FormGroup = new FormGroup({});


  constructor(private appService: AppService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initFormParent ();
  }
  initFormParent (): void{
    this.formParent=this.formBuilder.group({
      id         : new FormControl(null),
      name:        new FormControl(null, Validators.compose([Validators.required] )),
      doc :        new FormControl(null, Validators.compose([Validators.required])),
      typeId :     new FormControl(null, Validators.compose([Validators.required])),
    });
  }  
  createUser(){
    this.appService.crearUser(this.formParent.value).subscribe(()=>this.onResetForm());
  }
  onResetForm(){
    if (this.formParent.valid){
    this.formParent.reset();
    }
  }
  get name(){ return this.formParent.get('name')}
  get doc(){ return this.formParent.get('doc')}
}
