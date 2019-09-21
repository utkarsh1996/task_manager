
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
  editdata:boolean = true ;
  ngOnInit()
  {
    this.display = 'block';
    this.flag = false ;
    this.display1 = 'none' ;
  }
  searchAssignedTo(){
  console.log("assignedToSearch = " + this.assignedToSearch);
}
openModal()
  {
    this.display1 = 'block' ;
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
  }
  httpGet(theUrl)
  {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
  }
}
