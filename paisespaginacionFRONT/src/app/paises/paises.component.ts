import { Component, OnInit } from '@angular/core';
import { PaisesService } from './../paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Array<any> = [];
  totalPages: Array<number> = [];

  

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  //Avance o Retroceso paginación
  isFirst = false;
  isLast = false;

  constructor(private paisesService: PaisesService) { }

  ngOnInit() {
    this.cargarPaises();
  }

  cargarPaises() {
    this.paisesService.paises(this.page, this.size, this.order, this.asc).subscribe(
      data => {
        this.paises = data.content;
        this.isFirst = data.first;
        this.isLast = data.last;
        this.totalPages = new Array(data['totalPages']);
        console.log(data);
      },
      err => {
        console.log(err.error);
      }
    );
  }
  
  //Primera pagina o última
  sort(): void {
    this.asc = !this.asc;
    this.cargarPaises();
  }

  // Metodo: Si no es la primera página va disminuyendo
  rewind(): void {
    if(!this.isFirst) {
      this.page--;
      this.cargarPaises();
    }
  }

  // Metodo: Si no es la última página va aumentando
  forward(): void {
    if(!this.isLast) {
      this.page++;
      this.cargarPaises();
    }
  }

  // Metodo: numero de la pagina
  setPage(page: number): void {
    this.page = page;
    this.cargarPaises();
  }

  // Metodo: orden de paises
  setOrder(order: string): void {
    this.order = order;
    this.cargarPaises();
  }

}
