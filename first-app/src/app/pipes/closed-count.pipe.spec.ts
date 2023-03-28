import { ClosedCountPipe } from './closed-count.pipe';

describe('ClosedCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ClosedCountPipe();
    expect(pipe).toBeTruthy();
  });
});
