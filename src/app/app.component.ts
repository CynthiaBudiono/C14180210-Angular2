import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from './globalnote.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private router: Router, public globalvar : GlobalnoteService){
    this.notes = this.globalvar.getnotes();
  }
  // notes: any[][] = [];
  notes;
  txtjudul:String;
  txtisi:String;
  txtdate:Date;
  btnklik=false;
  name = 'User';
  lnotes=0;

  godet(){
    this.router.navigate(["/detailnote/"]);
  }

  gofav(){
    this.router.navigate(["/favourite/"]);
  }
  tambah(){
    this.btnklik=true;
  }

  save(){
    this.lnotes = this.notes.length;
    this.notes[this.lnotes] = Array(3);
    alert(this.lnotes);
    this.notes[this.lnotes][0] = this.txtjudul;
    // alert(this.notes[this.lnotes][0]);
    this.notes[this.lnotes][1] = this.txtisi;
    this.notes[this.lnotes][2] = this.txtdate;
    this.globalvar.setnotes(this.notes);
    alert("get NOTESSS : " + this.globalvar.getnotes());
     for(var i=0; i<this.lnotes; i++){
      console.log(this.notes[i][0] + "-" + this.notes[i][1] + "-" + this.notes[i][2]);
    }
    
    this.router.navigate(["/detailnote/"]);
  }

  cancel(){
    this.btnklik=false;
    this.txtjudul="";
    this.txtisi="";
    // this.txtdate=Date();
  }
}
