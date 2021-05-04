import { Component, OnInit } from '@angular/core';
import { IConfig } from './appsetting.model';
import { AppsettingService } from './appsetting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public appsettingService:AppsettingService<IConfig>){}
  title = 'angularlibrary';

  ngOnInit(){
    this.appsettingService.getSetting().subscribe(res=>{
      console.log('res',res.BaseRefUrl)
    })
  }
}
