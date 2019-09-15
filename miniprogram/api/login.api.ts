import { LoginRequsetDataInterface } from '../interfaces/login.interface';
import { commonHttp } from '../utils/request.util';

export function loginApi(data: LoginRequsetDataInterface): Promise<[]> {
  return commonHttp<LoginRequsetDataInterface, []>({
    url: '/login',
    method: 'POST',
    data
  }, Array);
}