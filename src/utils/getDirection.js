export default (el, arr, direction) => {
   if (el === 0) {
    return true;
   } else if (el == arr - 1) {
    return false;
   } else {
    return direction;
   }
}