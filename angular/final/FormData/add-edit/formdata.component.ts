import { Component, OnInit } from './node_modules/@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from './node_modules/@angular/forms';
import { format } from './node_modules/util';
import { Observable } from './node_modules/rxjs';

@Component({
  selector: 'app-formdata',
  templateUrl: './formdata.component.html',
  styleUrls: ['./formdata.component.css']
})
export class FormDataComponent implements OnInit {
  form: FormGroup;
  user: {} = {
    fullName: {
      name: 'Andres Sosa',
    },
    about: '',
    image: 'vdsvdsvd',
    skills: [],
    country: ''
  };

  countries: any[] = [
    {
      code: 'hn',
      name: 'Honduras',
    },
    {
      code: 'pty',
      name: 'Panamá',
    },
    {
      code: 'es',
      name: 'El Salvador',
    },
  ];
  constructor() {

  

    this.form = new FormGroup({
      fullName: new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3), this.customValidation], this.exists)
      }),
      skills: new FormArray([
      ]),
      about: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl(),
      country: new FormControl('', Validators.required)
    });

    // tslint:disable-next-line:max-line-length
    this.form.controls['password2'].setValidators([Validators.required, this.reviewPassword.bind(this.form)]);

    // setear valores por defecto a la forma
    this.form.setValue({ ...this.user, password: '', password2: '' });
    // ver cambios en tiempo real de la forma
    // this.form.valueChanges.subscribe(data => console.log(data));

    // ver cambios de un campo en especial
    (this.form.controls.fullName as FormGroup).controls.name.valueChanges.subscribe(data => console.log(data));
    // ((this.form.controls['fullName'] as FormGroup).controls['name'] as FormControl).valueChanges.subscribe(data => console.log(data));

    // ejemplo básico
      // this.form = new FormGroup({
    //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   description: new FormControl('', Validators.required),
    //   image: new FormControl('', Validators.required),
    // });

  }

  ngOnInit() {

  }

  saveForm() {
    // this.form.markAsDirty({ onlySelf: true });
    this.validateAllFormFields(this.form);
    console.log(this.form.value);
    console.log(this.form);
    // this.form.reset();

  }

  validateAllFormFields(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const currentControl = form.get(field);
      if (currentControl instanceof FormControl) {
        currentControl.markAsTouched({ onlySelf: true });
      } else if (currentControl instanceof FormArray) {
        (currentControl.controls as Array<FormControl>).forEach(item => {
          item.markAsTouched({ onlySelf: true });
        });
      } else if (currentControl instanceof FormGroup) {
        this.validateAllFormFields(currentControl);
      }
    });

  }

  reviewPassword(control: FormControl): { [s: string]: boolean } {
    const form: FormGroup = (this as unknown as FormGroup);
    if (control.value !== form.controls['password'].value) {
      return {
        different: true
      };
    }

    return null;
  }

  exists(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value.toLowerCase() === 'Ramon Sosa'.toLowerCase()) {
          resolve({ exists: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  customValidation(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Sosa') {
      return {
        mana: true
      };
    }
    return null;
  }

  addSkills() {
    (this.form.controls.skills as FormArray).push(new FormControl('', Validators.required));
  }

}
