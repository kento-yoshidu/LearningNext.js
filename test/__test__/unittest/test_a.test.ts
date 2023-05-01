import { add, sub, add2, RangeError } from "./test_a"

// describe関数でテストをいくつかのグループに分類する
describe("test_a", () => {
  // describeはネストできる
  describe("add", () => {
    // test関数はテスト名とテスト関数で構成される
    test("1+1が2になること", () => {
      // 文全体がアサーション
      // toBeがマッチャー
      expect(add(1, 1)).toBe(2);
    });
    test("1+2が3になること", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  describe("sub", () => {
    test("1-1が0になること", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2-1が1になること", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
  // 失敗するテスト
  /*
  test("1-1が0になること", () => {
    expect(sub(1, 1)).toBe(1)
  })
  */

  describe("例外処理", () => {
    test("aが101の時、例外が起きること", () => {
      expect(() => add2(101, 10)).toThrow()
    })
    test("bが101の時、特定の例外メッセージが返ってくること", () => {
      expect(() => add2(1, 101)).toThrow("Error Code: 999")
    })
    test("aとbが共に100を超えている時、RangeError例外が起きること", () => {
      expect(() => add2(101, 101)).toThrow(RangeError)
    })
  })
});

// 〇〇（の結果)が××になること
