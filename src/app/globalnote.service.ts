import { Injectable } from '@angular/core';

@Injectable()
export class GlobalnoteService {
  private arrayn: any[][] = [];
  private arrayfav: any[][] = [];

  constructor() { }

  public getnotes(){
    return this.arrayn;
  }

  public setnotes(arr : any[][]){
    this.arrayn = arr;
  }

  public getfav(){
    return this.arrayfav;
  }

  public setfav(arrf : any[][]){
    this.arrayfav = arrf;
  }
}