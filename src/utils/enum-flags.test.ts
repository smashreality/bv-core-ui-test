// REF: https://stackoverflow.com/posts/50261449/revisions

describe('ENUM Flags', () => {
  enum FileAccess {
    NONE,
    READ = 1 << 1,
    WRITE = 1 << 2,
    EXEC = 1 << 3,
  }

  it('should contain read, write and none flags', () => {
    expect(FileAccess.NONE).toBe(0);
    expect(FileAccess.READ).toBe(1 << 1);
    expect(FileAccess.WRITE).toBe(1 << 2);
  });

  it('should allow for combining flags', () => {
    const readWrite = FileAccess.READ | FileAccess.WRITE;
    expect(readWrite).toBe(FileAccess.READ + FileAccess.WRITE);
    expect(readWrite & FileAccess.READ).toBe(FileAccess.READ);
    expect(readWrite & FileAccess.WRITE).toBe(FileAccess.WRITE);
    expect(readWrite & FileAccess.NONE).toBe(0);
  });

  it('should allow for combining after initial set', () => {
    let x: FileAccess = FileAccess.READ;

    x |= FileAccess.WRITE;

    expect(x).toBe(FileAccess.READ | FileAccess.WRITE);
    expect(x).toBe(FileAccess.WRITE | FileAccess.READ);
  });

  it('should allow for remove flag after initial set', () => {
    let x: FileAccess = FileAccess.READ | FileAccess.WRITE;

    x &= ~FileAccess.READ;
    expect(x).toBe(FileAccess.WRITE);

    x |= FileAccess.EXEC;

    expect(FileAccess.WRITE === (x & FileAccess.WRITE)).toBe(true);
    expect(FileAccess.READ === (x & FileAccess.READ)).toBe(false);
    expect(FileAccess.EXEC === (x & FileAccess.EXEC)).toBe(true);
  });
});
