import { NgModule  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomesComponent } from './homes.component';
import { HomesRoutes } from './homes.router';

// layout
import { MenuComponent } from '../global-layout/menu/menu.component';
import { TopComponent } from '../global-layout/top/top.component';
import { FooterComponent } from '../global-layout/footer/footer.component';
import { ContentComponent } from '../global-layout/content/content.component';
// show content
import { ContentModel } from './content.module';
import { UserAddComponent } from './user/user-add/user-add.component';

@NgModule({
  declarations: [
    HomesComponent,
    MenuComponent,
    TopComponent,
    FooterComponent,
    ContentComponent,
    UserAddComponent
  ],
  imports: [
    ContentModel,
    RouterModule.forChild(HomesRoutes),
  ],
  providers: [],
})
export class HomesModule { }
