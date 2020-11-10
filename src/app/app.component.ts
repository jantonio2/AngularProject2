import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formularioUno = new FormGroup({
    nombre : new FormControl(''),
    apellido : new FormControl(''),
    cedula : new FormControl(''),
    numero : new FormControl(''),
    area : new FormControl(''),
    profesion : new FormControl(''),
    salario :  new FormControl('')
  });
}
