
import { AppComponent } from './app.component';
export const appRoutes = [
    {
        path: '',
        redirectTo: 'homes',
        pathMatch: 'full'

    },
    {
        path: 'homes',
        // component: HomeComponent
        data: {preload: true}, // true： 执行预加载；false： 不执行预加载；
        loadChildren: './homes/homes.module#HomesModule'

    },
    {
        path: 'login',
        // component: JokesComponent
        data: {preload: true}, // true： 执行预加载；false： 不执行预加载；
        loadChildren: './login/login.module#LoginModule',
    },
    {
        path: '**',
        loadChildren: './login/login.module#LoginModule',
    }
];
