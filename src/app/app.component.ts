
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { OnInit ,Output ,EventEmitter	} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'scrum-ui';
  arr = [1,2,3];
  assignedToSearch="" ;
  display = 'block';
  flag = false ;
  link = '';
   status = ["PENDING","REJECTED","DEVELOPMENT","PAUSED","TESTING","PRODUCTION"];
  display1 = 'none'  ;
  addTask = 'none';
  editdata:boolean = true ;
  entries ;
  index = 1;
  tempentries;
  
  ngOnInit()
  {
    this.display = 'block';
    this.flag = false ;
    this.display1 = 'none' ;
    this.addTask = 'none';
  }
  searchAssignedTo(){
  console.log("assignedToSearch = " + this.assignedToSearch);
}
openModal(temp)
  {
    this.display1 = 'block' ;
    this.tempentries = temp ;
  }
  closeModal()
  {
  this.display = 'none';
  this.flag = true ;
  console.log(this.link);
  }
  closeModal1()
  {
    this.display1 = 'none' ;
  }
  openTask()
  {
    this.addTask = 'block';
  }
  closeTask()
  {
    this.addTask = 'none';
  }
  editData()
  {
    this.editdata = false ;
  }
  getAllData(){
    var id="";
    if(this.link[0]!='h'){
      id = this.link.split('/')[3];
    }
    else{
      id = this.link.split('/')[5];
    }
    var res = this.httpGet('http://localhost:5000/api/sheets/'+id);
    this.closeModal();
    console.log(res);
    this.entries= null;
    this.entries= JSON.parse(res);
    this.entries = this.entries.msg ;
  }
  httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }
}
