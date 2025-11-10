import { Component } from '@angular/core';

@Component({
  selector: 'app-paleta',
  templateUrl: './paleta.component.html',
  styleUrls: ['./paleta.component.css']
})
export class PaletaComponent {
  paletas = Array(9)
    .fill(0)
    .map(() => Array(5).fill('#ccc'));
}
