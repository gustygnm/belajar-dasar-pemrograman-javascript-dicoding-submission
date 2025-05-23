import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('Menjumlahkan dua angka positif', () => {
  assert.strictEqual(sum(3, 4), 7);
});

test('Argumen pertama bukan angka (string)', () => {
  assert.strictEqual(sum('3', 4), 0);
});

test('Argumen kedua bukan angka (string)', () => {
  assert.strictEqual(sum(3, '4'), 0);
});

test('Argumen pertama dan kedua bukan angka (string)', () => {
    assert.strictEqual(sum('3', '4'), 0);
  });

test('Argumen pertama bernilai negatif', () => {
  assert.strictEqual(sum(-3, 4), 0);
});

test('Argumen kedua bernilai negatif', () => {
  assert.strictEqual(sum(3, -4), 0);
});

test('Kedua argumen bernilai negatif', () => {
  assert.strictEqual(sum(-3, -4), 0);
});