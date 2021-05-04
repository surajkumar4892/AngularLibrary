import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-lib',
  templateUrl: "./my-lib.component.html",
  styleUrls: ["./my-lib.component.scss"],
})
export class MyLibComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  addLibForm= this.fb.group({
    name:[null]
  })

  ngOnInit(): void {
  }

  testClick(){
    console.log('this.addLibForm',this.addLibForm.get('name').value)
  }

}
