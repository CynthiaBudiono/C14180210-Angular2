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
    this.catatan= this.globalvar.getnotes();
    for(var i = 0; i> this.catatan.length; i++){
      if(this.catatan[i][3] == 1){
        this.notesf = this.catatan[i];
      }
    }
  }
  nomor = -1;
  catatan;
  notesf;
  ngOnInit() {
    
  }

  godet(a) {
    this.nomor = a;
    this.router.navigate(["/detailnote/" + this.nomor]);
  }

  makefav(a) {
    alert("aaaaa : "+a);
    if (this.notesf[a][3] == 0) {
      this.notesf[a][3] = 1;
      this.globalvar.arrayn[a][3] = 1;
    } else {
      this.notesf[a][3] = 0;
      this.globalvar.arrayn[a][3] = 0;
    }
  }

}