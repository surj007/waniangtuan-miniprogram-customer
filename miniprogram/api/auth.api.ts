import { LoginRequsetDataInterface } from '../interfaces/auth.interface';
import { commonHttp } from '../utils/request.util';
import { AUTH_API_BASE_URL } from '../utils/constants.util';

export function loginApi(data: LoginRequsetDataInterface): Promise<string> {
  return commonHttp<LoginRequsetDataInterface, string>({
    url: AUTH_API_BASE_URL + '/login',
    method: 'POST',
    data
  });
}