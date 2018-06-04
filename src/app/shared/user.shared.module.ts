import { NgModule } from '@angular/core';
import { UserInfoComponent } from '../user-info/user-info.component';

@NgModule({
    declarations: [
        UserInfoComponent
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



