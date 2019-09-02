import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  // styles: [
  //   `.ng-invalid.ng-touched:not(form) {
  //     border: 1px solid darkred;
  //   }`
  // ]
})
export class FormTemplateComponent implements OnInit {
  inicializar: Persona = {
    name: null,
    lastName: null,
    email: null
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
  constructor() { }

  ngOnInit() {
  }

  guardar( formulario: NgForm ) {
    if (formulario.valid) {
      console.log(formulario.value);
    }
  }

}


// tslint:disable-next-line:interface-over-type-literal
type Persona = {
  name: string;
  lastName: string;
  email: string;
};
