import { Component, OnInit ,Output ,EventEmitter	} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'scrum-ui';
  arr = [1,2,3];
  display = 'block';
  flag = false ;
  link = '';
  ngOnInit()
  {
    this.display = 'block';
    this.flag = false ;
  }
  closeModal()
  {
  this.display = 'none';
  this.flag = true ;
  console.log(this.link);
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
