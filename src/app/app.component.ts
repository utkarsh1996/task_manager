
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
  taskName="";
  taskDesc="";
  AssignedTo="";
  AssignedDate="";
  Deadline="";
  completionDate="";
  comments="";
  taskStatus="Select Status";
  
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
    this.taskName="";
  this.taskDesc="";
  this.AssignedTo="";
  this.AssignedDate="";
  this.Deadline="";
  this.completionDate="";
  this.comments="";
  this.taskStatus="Select Status";

  }
  closeTask()
  {
    this.error=0;
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
  error=0;
  addTaskToFile(){

  if(this.taskName.length==0 || this.taskDesc.length==0 || this.AssignedTo.length==0 
    || this.AssignedDate.length==0 ||this.Deadline.length==0 || this.completionDate.length==0
     || this.comments.length==0 || this.taskStatus=="Select Status"){
        this.error=1;
  }
  else  this.error=0;
}

}
