import { httpGet, httpPost } from '../http';

describe('httpGet', () => {
  test('httpGet throws an error with the provided URL', () => {
    const url = 'https://example.com';
    expect(() => httpGet(url)).toThrow(url);
  });
});

describe('httpPost', () => {
  test('httpPost throws an error with the provided URL', () => {
    const url = 'https://example.com';
    expect(() => httpPost(url)).toThrow(url);
  });
});