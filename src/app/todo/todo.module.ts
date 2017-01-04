import { NgModule } from '@angular/core';

import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';

import { TodoService } from '../_shared/_services/todo.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule,
      TodoRoutingModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }