import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-didattica-a-distanza',
  templateUrl: './didattica-a-distanza.component.html',
  styleUrls: ['./didattica-a-distanza.component.css']
})
export class DidatticaADistanzaComponent {
  constructor(private title:Title){
    this.title.setTitle("didattica a distanza");
  }
}
