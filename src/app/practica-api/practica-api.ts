import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IColor } from '../models/colors.model'
import { Service } from '../Service/service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practica-api',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './practica-api.html',
  styleUrls: ['./practica-api.css'],
})
export class PracticaApi implements OnInit {

  listaDeColores: IColor[] = [];
  listaDeColoresPorGrupo: IColor[] = [];
  listaDeColoresPorTema: IColor[] = [];
  
  constructor(private service: Service) { }
  //pruebas para recibir valores
  tema :string = 'light';
  colorGrupo:string = 'Orange';
  nombre: string = 'DodgerBlue';

  colorSeleccionado?: IColor;

  ngOnInit(): void {
    this.getAllColors();
  }

  getAllColors() {
    this.service.getFullColors().subscribe({
      next: (data: any) => {
        this.listaDeColores = data.colors;
        console.log('Colores cargados:', this.listaDeColores);
      },
      error: (error) => {
        console.log('Error al cargar colores:', error);
      },
    });
  }

  llamarColor(nombre: string) {
    this.service.getColorsByName(nombre).subscribe({
      next: (data: any) => {
        this.colorSeleccionado = data.data;
        console.log(this.colorSeleccionado);
        console.log(this.colorSeleccionado?.name);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  
  llamarColorGrupo(colorGrupo: string) {
    this.service.getColorByGroup(colorGrupo).subscribe({
      next: (data: any) => {
        this.listaDeColoresPorGrupo = data.colors
        console.log(this.listaDeColoresPorGrupo)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  llamarColorPorTema(theme : string){
    this.service.getColorByTheme(theme).subscribe({
      next: (data: any) => {
        this.listaDeColoresPorTema = data.colors;
        console.log(this.listaDeColoresPorTema)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
