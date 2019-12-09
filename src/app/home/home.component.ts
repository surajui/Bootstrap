import { Component, OnInit } from '@angular/core';
import { OjasService } from '../ojas.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result;
  data: any;
  constructor(private s:OjasService) { }
  ngOnInit() {
return timer(0,5000).subscribe(()=>{
  this.s.getdata().subscribe(resp=>{
    this.result=resp['hits']
  })
});
  }
  fun(i){
  this.data=i;
  }
}
