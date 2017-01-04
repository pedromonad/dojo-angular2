import { Injectable } from '@angular/core';
import { Todo } from '../_models/todo.model';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService{
    
private url = 'http://localhost:3000/todo/';
private headers = new Headers({ 'Content-Type': 'application/json' });
private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {
  }

  getAll () {
    return this.http.get(this.url, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  add (todo: Todo) {
    const body = JSON.stringify(todo);
    return this.http.post(this.url, body, this.options)
                    .map(this.extractData)
                    .catch(this.handleError);
                    
  }

  update(todo: Todo) {
    const body = JSON.stringify(todo);
    return this.http.put(this.url + todo.id, body, this.options)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  remove(todo: Todo)  {
    return this.http.delete(this.url + todo.id, this.options)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || { };
  }
  
  private handleError (error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}