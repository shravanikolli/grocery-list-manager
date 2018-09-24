import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: [
    '../../assets/css/bootstrap.min.css'
  ] 
})
export class AddGroceryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  task: string;
  tasks = [];

  onClick(){
  	this.tasks.push({name: this.task, strike: false});
  	this.task = '';
  }

}
