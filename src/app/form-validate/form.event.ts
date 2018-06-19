/* 控制 form 表单中事件的定义 */

// esc 清除 Input 输入的内容
import { Observable } from 'rxjs/Observable';
export class FormEvent {
    static addlistener(eventName: string, target: HTMLInputElement) {
        return new Observable((observable => {
            const fun = (e) => observable.next(e); // 真是欲哭无泪就因为这句代码，坑了很久。 如果你想在 subscribe 中获取传递过来的参数，请在 next 中传递值啊。。就是眼睛不好。
            target.addEventListener(eventName, fun);
            return () => {
                target.removeEventListener(eventName, fun);
            };
        }));
    }
}

