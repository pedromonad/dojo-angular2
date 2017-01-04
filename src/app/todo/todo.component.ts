import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  private todos = [];
  private isLoading = true;

  private todo = {};
  private isEditing = false;

  private addTodoForm: FormGroup;
  private name = new FormControl("", Validators.required);
  
  private infoMsg = { body: "", type: "info"};

  constructor(private http: Http,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getTodos();

    this.addTodoForm = this.formBuilder.group({
      name: this.name
    });

  }

  getTodos() {
   
  }

  addTodo() {

    console.log('haha');
    
  }

  enableEditing(todo) {
    this.isEditing = true;
    this.todo = todo;
  }

  cancelEditing() {
    this.isEditing = false;
    this.todo = {};
    this.sendInfoMsg("item editing cancelled.", "warning");
    // reload the todos to reset the editing
    this.getTodos();
  }

  editTodo(todo) {
    
  }

  deleteTodo(todo) {
    
  }

  sendInfoMsg(body, type, time = 3000) {
    this.infoMsg.body = body;
    this.infoMsg.type = type;
    window.setTimeout(() => this.infoMsg.body = "", time);
  }

}
