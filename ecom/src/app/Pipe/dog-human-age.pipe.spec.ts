import { DogHumanAgePipe } from './dog-human-age.pipe';

describe('DogHumanAgePipe', () => {
  it('create an instance', () => {
    const pipe = new DogHumanAgePipe();
    expect(pipe).toBeTruthy();
  });
});
