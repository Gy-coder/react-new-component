import classnames from '../classnames';
describe('classes', () => {
  it('should accept a classname', function () {
    const result = classnames('a');
    expect(result).toEqual('a');
  });
  it('should accept two classnames', function () {
    const result = classnames('a', 'b');
    expect(result).toEqual('a b');
  });
  it('should accept zero classnames', function () {
    const result = classnames();
    expect(result).toEqual('');
  });
  it('?', function () {
    const result = classnames('a', undefined);
    expect(result).toEqual('a');
  });
  it('?', function () {
    const result = classnames('a', null, '中文');
    expect(result).toEqual('a 中文');
  });
});
