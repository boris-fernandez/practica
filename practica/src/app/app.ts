import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nombre: FormControl;
  apellidos: FormControl;
  edad: FormControl;
  formulario: FormGroup;
  datos: any[] = [];

  constructor() {
    this.nombre = new FormControl('', [Validators.required]);
    this.apellidos = new FormControl('', [Validators.required]);
    this.edad = new FormControl(0, [Validators.required, Validators.min(0)]);
    this.formulario = new FormGroup({
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad
    });
  }

  guardar(): void {
    this.datos.push(this.formulario.value);
    this.formulario.reset();
  }

  actualizar(item: any): void {
    const idx = this.datos.indexOf(item);
    if (idx > -1) {
      this.datos[idx] = { ...item, nombre: item.nombre + ' (editado)' };
    }
  }
}
