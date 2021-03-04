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
    // this.catatan= this.globalvar.getnotes();
    // alert(this.catatan.length);
    for(var i = 0; i <  this.globalvar.getnotes().length; i++){
      if( this.globalvar.getnotes()[i][3] == 1){
        this.notesf.push(this.globalvar.getnotes()[i]);
        // alert(this.notesf);
      }
    }
  }
  nomor = -1;
  a=1;
  // catatan;
  notesf: any[] =[];
  ngOnInit() {
    
  }
  favourite(){
    
  }
  godet(a) {
    this.nomor = a;
    this.router.navigate(["/detailnote/" + this.nomor]);
  }

  makefav(a) {
    // alert("aaaaa : "+a);
    this.notesf[a][3] = 0;
    this.globalvar.arrayn[a][3] = 0;
    this.notesf.splice(a,1);
  }
}