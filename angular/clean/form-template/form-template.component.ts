import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
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

}
