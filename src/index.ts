function debounce<T extends Function>(fn: T, delay: number = 0) {
  let _timer: any
  const tempFunc = (...args: any) => {
    clearTimeout(_timer);
    _timer = setTimeout(() => fn(...args), delay)
  }
  return <T>(<any>tempFunc)
}
export default debounce
