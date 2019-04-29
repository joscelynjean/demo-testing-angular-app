import { PrettierPlayerNamePipe } from './prettier-player-name.pipe';

describe('PrettierPlayerNamePipe', () => {

  let pipe: PrettierPlayerNamePipe;

  beforeEach(() => {
    pipe = new PrettierPlayerNamePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('remove player id', () => {
    const result = pipe.transform('Joel Armia\\armiajo01');
    expect(result).toEqual('Joel Armia');
  });

});
