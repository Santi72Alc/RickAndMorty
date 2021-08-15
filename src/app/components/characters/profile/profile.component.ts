import { Component, Input, OnInit } from '@angular/core';
import { RickAndMortyProfile } from 'src/app/models/rickandmorty.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input('profile') profile: RickAndMortyProfile['profile']
  
  estados: any  = {
    'Alive': 'VIVO',
    'Dead': 'MUERTO',
    'unknown': 'DESCONOCIDO'
  }
   constructor() { }

  ngOnInit(): void {
  }

}
