/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);         // Отрицательное число
  expect(convertBytesToHuman(NaN)).toBe(false);         // NaN
  expect(convertBytesToHuman(Infinity)).toBe(false);    // Infinity
  expect(convertBytesToHuman(-Infinity)).toBe(false);   // -Infinity
  expect(convertBytesToHuman('string')).toBe(false);   // Строка
  expect(convertBytesToHuman(undefined)).toBe(false);  // undefined
  expect(convertBytesToHuman(null)).toBe(false);       // null
  expect(convertBytesToHuman([])).toBe(false);         // Массив
  expect(convertBytesToHuman({})).toBe(false);         // Объект
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(0)).toBe('0 B');            // 0 байт
  expect(convertBytesToHuman(1)).toBe('1 B');            // 1 байт
  expect(convertBytesToHuman(1023)).toBe('1023 B');      // < 1 КБ
  expect(convertBytesToHuman(1024)).toBe('1 KB');        // 1 КБ
  expect(convertBytesToHuman(123123)).toBe('120.24 KB'); // Пример с килобайтами
  expect(convertBytesToHuman(1048576)).toBe('1 MB');     // 1 МБ
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB'); // Пример с мегабайтами
  expect(convertBytesToHuman(1073741824)).toBe('1 GB');  // 1 ГБ
  expect(convertBytesToHuman(1610612736)).toBe('1.5 GB');// Пример с гигабайтами
});

test('Проверка на пограничные случаи', () => {
  expect(convertBytesToHuman(5)).toBe('5 B');           // Маленькие значения
  expect(convertBytesToHuman(999999999999999999)).toBe('888.18 PB'); // Очень большие значения
});

