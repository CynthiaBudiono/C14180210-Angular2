import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalnoteService } from '../app/globalnote.service';

@Component({
  selector: 'app-detailnote',
  templateUrl: './detailnote.component.html',
  styleUrls: ['./detailnote.component.css']
})
export class DetailnoteComponent implements OnInit {

  constructor(private router: Router, public globalvar : GlobalnoteService){
    this.notes = this.globalvar.getnotes();
  }

  notes;
  ngOnInit() {
  }
}