import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar directivas como *ngIf, *ngFor
import { FormsModule } from '@angular/forms';  // Para usar [(ngModel)] en inputs
import { HttpClientModule, HttpClient } from '@angular/common/http';  // Para hacer peticiones HTTP


@Component({
  selector: 'app-gama',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './gama.html',
  styleUrls: ['./gama.css']
})
export class Gama {
    // Variable que guarda el color ingresado por el usuario
  hexInput = '';

  // Variable que guarda la información del color base (HEX, RGB, HSL)
  colorInfo: any;

  // Array que guarda los colores relacionados (la gama)
  colorScheme: any[] = [];

  // Constructor que inyecta el servicio HttpClient para hacer peticiones a la API
  constructor(private http: HttpClient) {}

    // Función que se ejecuta al hacer clic en "Buscar gama"
  buscarGama() {
    const hex = this.hexInput.replace('#', '');

    // Petición para obtener la información del color base
    this.http.get(`https://www.thecolorapi.com/id?hex=${hex}`)
      .subscribe(data => this.colorInfo = data);

    // Petición para obtener una gama de colores relacionados
    this.http.get(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=analogic&count=7`)
      .subscribe((data: any) => this.colorScheme = data.colors);
  }
}
