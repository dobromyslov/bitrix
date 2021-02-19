import 'reflect-metadata';
import { Response } from './response';
import { request } from 'gaxios';
import { Agent } from 'https';
import { ListOptions } from './list-options';
import { ListResponse } from './list-response';
import { ClassConstructor, plainToClass } from 'class-transformer';

export class AbstractApi {
  constructor(
    protected webhookUrl: string
  ) {
  }

  protected async _execute<T>(
    method: string,
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    data?: Record<string, any>
  ): Promise<Response<T>> {
    const result = await request<Response<T>>({
      method: 'POST',
      url: [
        this.webhookUrl?.replace(/\/$/g, ''),
        method
      ].join('/'),
      responseType: 'json',
      data,
      agent: new Agent({
        rejectUnauthorized: false
      })
    }).catch(error => {
      const bitrixCode = error?.response?.data?.error;
      const bitrixMessage = error?.response?.data?.error_description;
      if (bitrixCode || bitrixMessage) {
        throw new Error(`Bitrix REST API: ${bitrixCode ?? 'Unknown Error Code'}: ${bitrixMessage ?? ''}.`)
      } else {
        throw error;
      }
    });

    if (!result?.data) {
      throw new Error('Result data is empty.');
    }

    return result.data;
  }

  protected async _executeList<T>(
    method: string,
    resultFieldName: string,
    resultClassDto: ClassConstructor<T>,
    options?: ListOptions<T>
  ): Promise<ListResponse<T>> {
    return this._execute<Record<string, T[]>>(method, options)
      .then(response => ({
        result: (response?.result && response.result[resultFieldName])?.map(value => plainToClass(resultClassDto, value)) ?? [],
        total: response?.total,
        next: response?.next
      }));
  }
}
