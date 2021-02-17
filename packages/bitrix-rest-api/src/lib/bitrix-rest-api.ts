import { SaleApi } from 'bitrix-rest-api';

export class BitrixRestApi {
  /**
   * Online Shop.
   * @see https://dev.1c-bitrix.ru/rest_help/sale/index.php
   */
  sale: SaleApi;

  constructor(webhookUrl: string) {
    this.sale = new SaleApi(webhookUrl);
  }
}
