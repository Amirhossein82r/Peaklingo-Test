// give element class for seconds and then remove it
/* 
  ***Params***
  element = html element
  className = class name you want give that element
  time = mili seconds that class name add to that element  
*/
// return void
export const timingClassList = function (element: HTMLElement, className: string, time: number) {
    if (element) {
        element.classList.add(className);
        setTimeout(() => {
            element.classList.remove(className);
        }, time);
    }
};
