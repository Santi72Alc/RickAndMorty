import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RickAndMortyResponse } from 'src/app/models/rickandmorty.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input('info') info: RickAndMortyResponse['character']['info'];
  @Output('onChangePage') onChangePage: EventEmitter<number>;

  page: number = 1;
  isPrimeraPagina: boolean = true;
  isUltimaPagina: boolean = false;

  constructor() {
    this.onChangePage = new EventEmitter();
    this.page = 1;
  }

  ngOnInit(): void {
  };

  irInicio() {
    this.isUltimaPagina = false;
    this.isPrimeraPagina = true;
    this.page = 1;
    this.onChangePage.emit(1);
  }

  irAnterior() {
    this.isUltimaPagina = false;
    this.page--;
    if (this.page <= 1) {
      this.isPrimeraPagina = true
      this.page = 1
    }
    this.onChangePage.emit(this.page);
  }


  irSiguiente() {
    this.page++;
    this.isPrimeraPagina = false
    if (this.page >= <number>this.info?.pages) {
      this.page = <number>this.info?.pages;
      this.isUltimaPagina = true;
    }
    this.onChangePage.emit(this.page);
  }

 
  irUltima() {
    this.page = <number>this.info?.pages;
    this.isPrimeraPagina = false
    this.isUltimaPagina = true;
    this.onChangePage.emit(this.page);
  }

};
