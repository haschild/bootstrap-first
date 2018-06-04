import { NgModule } from '@angular/core';
import { LoginRouter } from './login.router';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';

// 表单的操作
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    FormsModule, // 想将这个导入主表中还不行
    CommonModule,
    RouterModule.forChild(LoginRouter)
  ],
  providers: [],
})
export class LoginModule { }


// 这里要导入 component +  router并且指明这是一个子路由，用 forChild 指明。在根组件里用forRoot指明这是一个根路由