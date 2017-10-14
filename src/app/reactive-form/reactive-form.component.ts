import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { equalValidator, mobileAsyncValidator, mobileValidator } from "../validator/validators";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, { validator: equalValidator })
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    let isValid: boolean = this.formModel.get("username").valid;
    // console.log("username 是否校验通过: " + isValid);
    let errors: any = this.formModel.get("username").errors;
    // console.log("username 校验信息: " + JSON.stringify(errors));

    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  //自定义验证
  valid(c: AbstractControl): { [key: string]: any } {
    return { "a": "b" };
  }

}
