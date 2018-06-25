import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// 因为用 http 获取数据
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// 模拟的数据
import { UserData } from '../mock-data/user.data';
import { UserService } from './user/user-service.';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserAddComponent } from './user/user-add/user-add.component';
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserDetailComponent,
    UserAddComponent, // 当时我将add模块放在 homes.module.ts 中，点击添加的时候一直跳转不过去。
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      UserData, { dataEncapsulation: false }
    )


  ],
  providers: [UserService],
})
export class ContentModel { }
