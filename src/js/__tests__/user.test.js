import { loadUser, saveUser } from '../user';
import { httpGet } from '../http';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

describe('loadUser', () => {
  test('should call loadUser once and return parsed data', () => {
    const mockData = { id: 1, name: 'John' };
    httpGet.mockReturnValue(JSON.stringify(mockData));

    const response = loadUser(1);

    expect(response).toEqual(mockData);
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
  });

  test('should throw an error if JSON parsing fails', () => {
    const invalidData = '{id: 1, name: John';
    httpGet.mockReturnValue(invalidData); 

  
    expect(() => loadUser(1)).toThrow(SyntaxError);
  });
});

describe('saveUser', () => {
  test('should throw an error because saveUser is unimplemented', () => {
  
    expect(() => saveUser({ name: 'John' })).toThrow('Unimplemented');
  });
});

