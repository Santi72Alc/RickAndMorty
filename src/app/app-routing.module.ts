import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ProfileComponent } from './components/characters/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/characters' },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:profileId', component: ProfileComponent },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
