import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-intrattenimento',
  templateUrl: './intrattenimento.component.html',
  styleUrls: ['./intrattenimento.component.css']
})
export class IntrattenimentoComponent implements OnInit {
  
  form!:FormGroup;
  constructor(private fb: FormBuilder,private title:Title){
    this.title.setTitle("intrattenimento");
  }
  x: any[] = [];
  s: any[]=[];
  sd:any;
  result:string="";
  control:boolean=false;
   ngOnInit(): void {
    this.initForm();
    this.onReset();
}
 initForm() :void{
  this.form = this.fb.group({
    x11:Number(),
    x12:Number(),
    x13:Number(),
    x21:Number(),
    x22:Number(),
    x23:Number(),
    x31:Number(),
    x32:Number(),
    x33:Number(),
  });
 }
 onReset():void{
  this.form.reset();
  this.result="";
}
 costruisciRighe(){
  for (var i = 1; i <= 3; i++) {
  this.x[i] = new Array(3);
  }

}
 onInvia(){
  this.costruisciRighe();
  this.riempiRighe();
 }
 riempiRighe(){
  this.x[1]=[this.form.value.x11,this.form.value.x12,this.form.value.x13];
  this.x[2]=[this.form.value.x21,this.form.value.x22,this.form.value.x23];
  this.x[3]=[this.form.value.x31,this.form.value.x32,this.form.value.x33];
  this.onStampa();
}
onStampa(){
  console.log(this.x[1],this.x[2],this.x[3])
  this.onControlla();
}
onControlla(){
  for (var i = 1; i <= 3; i++) {
    this.s[i]=0;
  for (var j = 0; j < 3; j++){
   this.s[i]=this.s[i]+this.x[i][j];}
    }
    if(this.s[1] === this.s[2] && this.s[2] === this.s[3]){
      this.control=true;
  }


  if(this.control == true){

       for (var i = 0; i < 3; i++) {
          this.s[i]=0;
            for (var j = 1; j <= 3; j++){
              this.s[i]=this.s[i]+this.x[j][i];
            }
          }
            if(this.s[1]!=this.s[2] || this.s[2]!=this.s[3]){
              this.control=false;
          }


if(this.control==true){

  this.sd=0
  for (var i = 1; i <= 3; i++) {
        this.sd=this.sd+this.x[i][i-1];
      }
      if(this.sd != this.s[1]){
        this.control=false;
      }
}
if(this.control==true){
  this.sd=0;
  this.sd=this.x[1][2]+this.x[2][1]+this.x[3][0];
  if(this.sd!=this.s[1]){
    this.control=false;}
}
if(this.control==true){
  if(this.x[1][0]==this.x[1][1] && this.x[1][1]==this.x[1][2] && this.x[1][2]==this.x[2][0] && this.x[2][0]==this.x[2][1] &&this.x[2][1]==this.x[2][2] && this.x[2][2]==this.x[3][0] && this.x[3][0]==this.x[3][1] && this.x[3][1]==this.x[3][2]){
    this.control=false;
  }
}

}
if(this.control==true){
  this.result="Bravissimo.Sei un genio!";}
  else {
  this.result="Riprova, sarai più fortunato!";}

console.log(this.control);
}
}
