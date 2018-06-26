import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl,  Validator, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidators {
  // form 表单验证
  /** 如果有下列字符则不通过 */

  static validatorStr(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { 'validatorStr': { value: control.value } } : null;
    };
  }
  /* 校验密码必须由数字和密码组成 */
  static validatorPassword(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const forbidden = !nameRe.test(control.value);
      return forbidden ? { 'validatorPassword': false } : null;
    };
  }
  // 校验中文名称
   static validatorName(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
  if (!nameRe) {
    nameRe = /([\u4e00-\u9fa5]{2,5})|([a-zA-Z]+[\.a-zA-Z].)/;
  }
    const forbidden = !nameRe.test(control.value);
    return forbidden ? { 'validatorName': true } : null;
  };
}
}

export function validatorStr(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'validatorStr': { value: control.value } } : null;
  };
}
/* 校验密码必须由数字和密码组成 */
export function validatorPassword(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    console.log(forbidden + '------');
    return forbidden ? { 'validatorPassword': { value: false } } : null;
  };
}



// @Directive({
//   selector: '[appForbiddenName]',
//   providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
// })
// export class ForbiddenValidatorDirective implements Validator {
//   @Input('appForbiddenName') forbiddenName: string;

//   validate(control: AbstractControl): { [key: string]: any } {
//     return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
//       : null;
//   }
// }
