import { NgModule } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';
import { BorderColorDirective } from './validator/border-color.directive';

@NgModule({
    declarations: [
        UserInfoComponent,
        BorderColorDirective // 表单校验
    ],
    imports: [
        // BrowserModule,
    ],

    // 这也算是共享模块的特点
    exports: [
        UserInfoComponent
    ],
    providers: [],
})
export class UserSharedModule { }



