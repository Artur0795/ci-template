import { httpGet, httpPost } from '../http';
import fetchData from '../http';

test('httpGet should throw an error', () => {
  expect(() => {
    httpGet('http://example.com');
  }).toThrow('http://example.com');
});

test('httpPost should throw an error', () => {
  expect(() => {
    httpPost('http://example.com');
  }).toThrow('http://example.com');
});

test('fetchData should throw an error with the correct message', () => {
  expect(() => {
    fetchData('http://example.com');
  }).toThrow('Mock this for http://example.com');
});
