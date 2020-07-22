export class util {
  isArr(obj: any) {
    if (Array.isArray(obj)) return true;
    else return false;
  }
  isEmail(str: string) {
    const mailFormat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return str.match(mailFormat);
  }
}
