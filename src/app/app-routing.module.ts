import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetaiComponent } from './pokemon-detai/pokemon-detai.component';
const routes: Routes = [
  {path: 'pokemons', component: PokemonsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: PokemonDetaiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
