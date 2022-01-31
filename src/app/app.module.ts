import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonDetaiComponent } from './pokemon-detai/pokemon-detai.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonDetaiComponent,
    MessagesComponent,
    DashboardComponent,
    PokemonSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
