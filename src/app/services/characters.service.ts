import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { RickAndMortyResponse } from '../models/rickandmorty.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseUrl: string = 'https://rickandmortyapi.com/api';
  private baseUrlCharacter: string = '';
  info: RickAndMortyResponse['character']['info'];

  constructor(
    private http: HttpClient, 
    private route: Router
    ) {
    this.baseUrlCharacter = `${this.baseUrl}/character`;
  }

  getAll(): Promise<RickAndMortyResponse['character']> {
    return this.http.get(this.baseUrlCharacter).toPromise();
  }

  goToPage(page: number = 1): Promise<RickAndMortyResponse['character']> {
    return this.http.get(`${this.baseUrlCharacter}/?page=${page}`).toPromise();
  }

  goToProfile(id: number) {
    console.log(id)
    this.route.navigate(['/characters', id])
  }
};
