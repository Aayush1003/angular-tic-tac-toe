import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  // rando: number | undefined;
  // constructor() {
  //    setInterval(()=>this.rando=Math.random(),500);
  //  }
   @Input() value:'X' | '0' | undefined;


}
