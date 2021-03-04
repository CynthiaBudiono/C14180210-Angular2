import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalnoteService } from '../app/globalnote.service';

@Component({
  selector: 'app-detailnote',
  templateUrl: './detailnote.component.html',
  styleUrls: ['./detailnote.component.css']
})
export class DetailnoteComponent implements OnInit {

  constructor(private router: Router, public globalvar : GlobalnoteService, private route: ActivatedRoute){
    // this.notes = this.globalvar.getnotes();
    
  }
  catatan;
  isicatatan;
  detailjudul;
  tglcreate;
  // notes;
  ngOnInit() {
    var nomor = this.route.snapshot.paramMap.get("nomor");
    this.detailjudul = this.globalvar.getnotes()[nomor][0]
    this.isicatatan = this.globalvar.getnotes()[nomor][1]
    this.tglcreate = this.globalvar.getnotes()[nomor][2]
    // this.isicatatan = this.route.snapshot.paramMap.get("nomor");
    // this.catatan = this.isicatatan;
  }

  goback(){
    // this.router.navigate(["/app/"]);
    this.router.navigate(["/"]);
  }
}