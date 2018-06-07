import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
  ],
  providers: [],
})
export class ContentModel { }
