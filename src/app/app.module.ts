import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoModule } from './todo/todo.module';
import { SharedModule} from './_shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDirective } from './_shared/_directives/confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDirective
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
