import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
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
