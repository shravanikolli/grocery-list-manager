import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: [
    '../../assets/css/bootstrap.min.css',
    './add-grocery.component.css'
  ] 
})
export class AddGroceryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  task: string;
  tasks: string[] = [];

  onClick(){
  	this.tasks.splice(0, 0, this.task);
  	this.task = '';
  }

  removeItem(item: string, event: any){
    console.log(event);
    let index = this.tasks.indexOf(item);
    if(index>-1){
      this.tasks.splice(index, 1);
    }
    if(event["srcElement"]["checked"]){
      this.tasks.splice(this.tasks.length, 0, item);
    }
    else{
      this.tasks.splice(0, 0, item);
    }
  }

}
