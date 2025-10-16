import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  a: string = '';
  b: string = '';
  op: string = 'add';
  result: number | null = null;
  error: string | null = null;

  calculate() {
    this.error = null;
    this.result = null;

    const aNum = parseFloat(this.a);
    const bNum = parseFloat(this.b);

    if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
      this.error = 'Por favor introduce números válidos en ambos campos.';
      return;
    }

    switch (this.op) {
      case 'add':
        this.result = aNum + bNum;
        break;
      case 'sub':
        this.result = aNum - bNum;
        break;
      case 'mul':
        this.result = aNum * bNum;
        break;
      default:
        this.error = 'Operación no soportada.';
    }
  }

  reset() {
    this.a = '';
    this.b = '';
    this.op = 'add';
    this.result = null;
    this.error = null;
  }

}
