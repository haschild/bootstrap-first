import { HomesComponent } from './homes.component';
import { Routes} from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
export const HomesRoutes: Routes = [
    {
        path: '',
        component: HomesComponent,
         // 这个单词的拼写坑死我了
        children: [
            {
                path: '',
                redirectTo: 'userList',
                pathMatch: 'full'
            },
            {
                path: 'userList',
                component: UserListComponent
            },
            {
                path: 'userDetail/:id',
                component: UserDetailComponent
            }
        ]
    },

];
