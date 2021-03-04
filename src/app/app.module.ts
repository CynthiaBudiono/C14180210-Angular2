import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailnoteComponent } from '../detailnote/detailnote.component';
import { FavouriteComponent } from '../favourite/favourite.component';
import { GlobalnoteService } from './globalnote.service';
import { AddnoteComponent } from '../addnote/addnote.component';
import { ListnotesComponent } from '../listnotes/listnotes.component';

const ROUTES : Routes = [
  {path : 'addnote', component: AddnoteComponent},
  {path : 'listnotes', component: ListnotesComponent},
  {path : 'detailnote', component: DetailnoteComponent},
  {path : 'favourite', component: FavouriteComponent},
  {path : 'detailnote/:nomor', component: DetailnoteComponent}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(ROUTES) ],
  declarations: [ AppComponent, HelloComponent, DetailnoteComponent, FavouriteComponent, AddnoteComponent, ListnotesComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalnoteService]
})
export class AppModule { }
