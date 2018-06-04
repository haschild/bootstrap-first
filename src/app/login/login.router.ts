import { LoginComponent } from './login.component';
import { Routes } from '@angular/router';
export const LoginRouter: Routes = [
    {
        path: '', // 默认不配置,在根路径里有指明路径
        component: LoginComponent, // 配置同步路由

    }

];
