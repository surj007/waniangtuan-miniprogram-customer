import { TestRequsetDataInterface, TestResponseDataInterface } from '../interfaces/test.interface';
import { commonHttp } from '../utils/request.util';
import { TEST_API_BASE_URL } from '../utils/constants.util';

export function testApi(): Promise<TestResponseDataInterface> {
  return commonHttp<TestRequsetDataInterface, TestResponseDataInterface>({
    url: TEST_API_BASE_URL + '/getUserInfoByUsername',
    method: 'GET',
    data: {
      name: 'srj'
    }
  });
}