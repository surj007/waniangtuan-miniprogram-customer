import { TestRequsetDataInterface, TestResponseDataInterface } from '../interfaces/test.interface';
import { commonHttp } from '../utils/request.util';

export function testApi(): Promise<TestResponseDataInterface> {
  return commonHttp<TestRequsetDataInterface, TestResponseDataInterface>({
    url: '/test',
    method: 'GET',
    data: {
      name: 'srj'
    }
  });
}