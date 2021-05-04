import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [MyLibComponent],
  imports: [MatButtonModule,MatInputModule,ReactiveFormsModule
  ],
  exports: [MyLibComponent,MatButtonModule,MatInputModule,ReactiveFormsModule]
})
export class MyLibModule { }
