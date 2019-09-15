export interface RequestHeaderInterface {
  cookie?: string;
}

export interface LoginResponeHeaderInterface<U> {
  readonly 'set-cookie': U;
}

export interface RequestConfigInterface<T> {
  readonly url: string;
  readonly method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: T;
  header?: RequestHeaderInterface;
}

export interface ResponseDataInterface<T> {
  readonly code: number;
  readonly msg: string;
  data: T;
}