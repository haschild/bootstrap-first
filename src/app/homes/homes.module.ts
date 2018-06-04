import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomesComponent } from './homes.component';
import { HomesRoutes } from './homes.router';
@NgModule({
  declarations: [
    HomesComponent
  ],
  imports: [
    RouterModule.forChild(HomesRoutes)
  ],
  providers: [],
})
export class HomesModule { }
