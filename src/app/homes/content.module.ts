import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

// 因为用 http 获取数据
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// 模拟的数据
import { UserData } from '../mock-data/user.data';
import { UserService } from './user/user-service.';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    FormsModule,
    NgxDatatableModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      UserData, { dataEncapsulation: false }
    )


  ],
  providers: [UserService],
})
export class ContentModel { }
