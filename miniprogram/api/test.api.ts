import { TestRequsetDataInterface } from '../interfaces/test.interface';
import { commonHttp } from '../utils/request.util';

export function testApi(): Promise<string> {
  return commonHttp<TestRequsetDataInterface, string>({
    url: '/test',
    method: 'GET',
    data: {
      name: 1
    }
  }, String);
}