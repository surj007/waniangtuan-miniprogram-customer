import { env } from '../env';

let BASE_URL: string = 'https://www.waniangt.com:8000/api';

if (env === 'dev') {
  BASE_URL = 'http://127.0.0.1:8000/api';
}
else if (env === 'pre-test') {
  BASE_URL = 'https://www.waniangt.com:8999/api';
}

const TEST_API_BASE_URL: string = '/test';
const AUTH_API_BASE_URL: string = '/auth';

export {
  BASE_URL,
  TEST_API_BASE_URL,
  AUTH_API_BASE_URL
}