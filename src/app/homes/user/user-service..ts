import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// http error catch
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../mock-data/user';
// set HttpHeaders
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {
  private userUrl = 'api/users';
  users: User[];
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   *
   * 这里讲解下<T> 该类型也泛指任意的类型，
   * 但是在改方法被调用的时候，类型就被确定了，不能更改了。
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }
  // 打印log日志
  private log(message: string): void {
    console.log('打印日志');
    // this.messageService.add('heroService' + message);

  }
  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl)
      .pipe( // 管道里可以捕获异常
        // tap 记录各种操作
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }
  // get user by id. will 404 if id not found.
  getUserById(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`; // 这个请求地址是通过 in-memory 获取数据。开始我以为和路由有关系，其实是没有关系的。
    return this.httpClient.get<User>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<User>(`getHeroeById id=${id}`))
    );
  }
  add(user: User): Observable<User> {
    return this.httpClient.post<User>(this.userUrl, user, httpOptions).pipe(
      tap((user: User) => this.log(`added hero w/ id=${user.id}`)),
      catchError(this.handleError<User>('add'))
    );
  }

  updateUserList(users: [User]) {
    this.users = users;
  }

}
