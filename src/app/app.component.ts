import { Component, VERSION } from "@angular/core";
import { Router } from "@angular/router";
import { GlobalnoteService } from "./globalnote.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router, public globalvar: GlobalnoteService) { }
  name = "User";
  // lnotes = 0;
  // nomor = -1;

  // notesfav: any[][] = [];
  // godet(a) {
  //   this.nomor = a;
  //   this.router.navigate(["/detailnote/" + this.nomor]);
  // }

  gonotes(){
    this.router.navigate(["/listnotes/"]);
  }
  gofav() {
    this.router.navigate(["/favourite/"]);
  }
  tambah() {
    this.router.navigate(["/addnote/"]);
    // this.btnklik = !this.btnklik;
    // this.txtjudul=null;
    // this.txtisi=null;
    // this.txtdate=null;
  }
}
