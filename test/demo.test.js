import converter from '../src/index'

describe('单位转换', function () {
  it('string: 不足万 - 10000.1', function () {
    expect(converter('10000.1')).toBe('10000.1');
  })
  it('string：万 - 1034567', function () {
    expect(converter('1034567')).toBe('103.46 万');
  })
  it('string: 亿 - 1234567891', function () {
    expect(converter('1234567891')).toBe('12.34 亿');
  })
  it('string: 万亿 - 1234567890000', function () {
    expect(converter('1234567890000')).toBe('1.23 万亿');
  })

  it('number: 不足万 - 10000.1', function () {
    expect(converter(10000.1)).toBe(10000.1);
  })
  it('number：万 - 1034567', function () {
    expect(converter(1034567)).toBe('103.46 万');
  })
  it('number: 亿 - 1234567891', function () {
    expect(converter(1234567891)).toBe('12.34 亿');
  })
  it('number: 万亿 - 1234567890000', function () {
    expect(converter(1234567890000)).toBe('1.23 万亿');
  })
})
