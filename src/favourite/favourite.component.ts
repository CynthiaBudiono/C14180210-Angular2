import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../app/globalnote.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor(private router: Router, public globalvar : GlobalnoteService){
    this.notesf = this.globalvar.getfav();
  }

  notesf;
  ngOnInit() {
  }

}