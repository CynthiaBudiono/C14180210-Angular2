import { Injectable } from '@angular/core';

@Injectable()
export class GlobalnoteService {
  private arrayn: any[][] = [];
  constructor() { }

  public getnotes(){
    return this.arrayn;
  }

  public setnotes(arr : any[][]){
    this.arrayn = arr;
  }
}