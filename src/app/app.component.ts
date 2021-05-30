import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dialog:any;
  ngOnInit(): void {
     this.dialog=JSON.parse(localStorage.getItem("dialog"));
     console.log(this.dialog);
     
  }
 
  title = 'AdminEmarket';
  closeModal(){
    $('#DialogModal').closest('.modal').modal('hide');
  }
}
