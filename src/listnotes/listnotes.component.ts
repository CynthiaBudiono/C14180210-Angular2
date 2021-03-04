import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../app/globalnote.service';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.css']
})
export class ListnotesComponent implements OnInit {

  constructor(private router: Router, public globalvar: GlobalnoteService) {
    this.notes = this.globalvar.getnotes();
  }
  notes;
  nomor = -1;
  ngOnInit() {
  }

  godet(a) {
    this.nomor = a;
    this.router.navigate(["/detailnote/" + this.nomor]);
  }

  makefav(a) {
  // alert("aaaaa : "+a);
  if (this.notes[a][3] == 0) {
    this.notes[a][3] = 1;
    this.globalvar.arrayn[a][3] = 1;
  } else {
    this.notes[a][3] = 0;
    this.globalvar.arrayn[a][3] = 0;
  }
}
}