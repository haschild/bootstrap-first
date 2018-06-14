/* 控制 form 表单中事件的定义 */

// esc 清除 Input 输入的内容
import { Observable } from 'rxjs/Observable';
export class FormEvent {
    static addlistener(eventName: string, target: HTMLInputElement) {
        return new Observable((observable => {
            const fun = (e) => observable.next(e);
            target.addEventListener(eventName, fun);
            return () => {
                target.removeEventListener(eventName, fun);
            };
        }));
    }
}

