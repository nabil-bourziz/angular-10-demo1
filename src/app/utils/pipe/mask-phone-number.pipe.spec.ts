import { MaskPhoneNumberPipe } from './mask-phone-number.pipe';

describe('MaskPhoneNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskPhoneNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
