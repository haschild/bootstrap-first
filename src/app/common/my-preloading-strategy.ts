
import { Route, PreloadingStrategy } from '@angular/router';
import { Observable } from 'RxJs';
import 'rxjs/add/observable/of';


// 自定义的路由加载方式
export class MyPreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        return route.data && route.data.preload ? fn() : Observable.of(null);
    }
}