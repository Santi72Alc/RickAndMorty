import { Component, OnInit } from '@angular/core';
import { RickAndMortyProfile, RickAndMortyResponse } from 'src/app/models/rickandmorty.model';
import { CharacterService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  infoCharacters: RickAndMortyResponse['character']['info'];
  arrCharacters: RickAndMortyProfile['profile'][] = [];

  profileToShow: RickAndMortyProfile['profile'];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getAll().then(resp => {
      this.arrCharacters = <RickAndMortyProfile['profile'][]>resp.results;
      this.infoCharacters = <RickAndMortyResponse['character']['info']>resp.info
      this.profileToShow = <RickAndMortyProfile['profile']>this.arrCharacters[0];

    });
  };

  onChangePage(pagina: number) {
    this.characterService.goToPage(pagina).then(resp => {
      this.arrCharacters = <RickAndMortyProfile['profile'][]>resp.results;
      this.infoCharacters = resp.info;
    });
  }


  onSelectCharacter(profile: RickAndMortyProfile['profile']) {
    // this.characterService.goToProfile(<number>profile?.id);
    this.profileToShow = profile
  }

}
