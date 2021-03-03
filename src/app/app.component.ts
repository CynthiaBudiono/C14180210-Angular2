import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalnoteService } from "./globalnote.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalvar: GlobalnoteService) {
    this.notes = this.globalvar.getnotes();
  }
  // notes: any[][] = [];
  index = 0;
  notes;
  txtjudul: String;
  txtisi: String;
  txtdate: Date = new Date();
  btnklik = false;
  name = "User";
  lnotes = 0;

  notesfav: any[][] = [];
  godet() {
    this.router.navigate(["/detailnote/"]);
  }

  gofav() {
    this.router.navigate(["/favourite/"]);
  }
  tambah() {
    this.btnklik = !this.btnklik;
  }

  save() {
    if(this.txtjudul == ""){
      alert("isi judul");
    }
    else if(this.txtisi == ""){
      alert("isi content");
    }
    // else if(this.txtdate !=date){

    // }
    else{

      this.lnotes = this.notes.length;
      this.notes[this.lnotes] = Array(3);
      alert(this.lnotes);
      this.notes[this.lnotes][0] = this.txtjudul;
      // alert(this.notes[this.lnotes][0]);
      this.notes[this.lnotes][1] = this.txtisi;
      this.notes[this.lnotes][2] = this.txtdate;
      this.globalvar.setnotes(this.notes);
      alert("get NOTESSS : " + this.globalvar.getnotes());
      for (var i = 0; i < this.lnotes; i++) {
        console.log(
          this.notes[i][0] + "-" + this.notes[i][1] + "-" + this.notes[i][2]
        );
      }

      this.router.navigate(["/detailnote/"]);
      this.btnklik = false;
    }
  }

  cancel() {
    this.btnklik = false;
    this.txtjudul = "";
    this.txtisi = "";
    // this.txtdate=Date();
  }

  makefav(a) {
    alert(a);
    // this.notesfav[a];
    this.globalvar.setfav(this.notes[a]);

  }
}
