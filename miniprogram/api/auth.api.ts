import { LoginRequsetDataInterface } from '../interfaces/auth.interface';
import { commonHttp } from '../utils/request.util';

export function loginApi(data: LoginRequsetDataInterface): Promise<string> {
  return commonHttp<LoginRequsetDataInterface, string>({
    url: '/auth/login',
    method: 'POST',
    data
  });
}