import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';
// ngx-datatable
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // appRoutes,
    // 当加载的时候，会把路由相关所有的模块都预加载进来。
   RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})

    // 不采用预加载的方式
    //  RouterModule.forRoot(appRoutes),

    // 自定义预加载
    //  RouterModule.forRoot(appRoutes, { preloadingStrategy: MyPreloadingStrategy })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
