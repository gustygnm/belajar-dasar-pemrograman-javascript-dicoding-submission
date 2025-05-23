import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('menjumlahkan 2 dan 3 harus menghasilkan 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

test('menjumlahkan bilangan negatif', () => {
  assert.strictEqual(sum(-1, -4), -5);
});

test('menjumlahkan 0 dan angka positif', () => {
  assert.strictEqual(sum(0, 10), 10);
});