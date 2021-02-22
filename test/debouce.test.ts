import debounce from '../src/index'

jest.useFakeTimers()

describe('debounce', function () {
  it('should debounce a function', function () {
    let counter: number = 0
    const tempFunc = function (val: any) {
      ++counter
      return val
    }
    const _debouceFunc = debounce(tempFunc, 1000)
    var results = [_debouceFunc('a'), _debouceFunc('b'), _debouceFunc('c')];
    expect(results).toEqual([undefined, undefined, undefined]);
  })
})
// test('test-debouce', () => {
//   let counter: number = 0
//   const tempFunc = function (val: any) {
//     ++counter
//     return val
//   }
//   const _debouceFunc = debounce(tempFunc, 1000)
//   var results = [_debouceFunc('a'), _debouceFunc('b'), _debouceFunc('c')];
//   expect(results).toEqual([undefined, undefined, undefined]);
//   setTimeout(() => {
//     expect(counter).toBe(3)
//   }, 500)
// })
