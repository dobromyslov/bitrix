/**
 * Payment.
 * @see https://dev.1c-bitrix.ru/rest_help/sale/sale.payment.add/resource.php
 * @see https://dev.1c-bitrix.ru/rest_help/sale/sale.payment.add/sale_payment_getFields.php
 */
export interface Payment {
  /**
   * Payment ID.
   * Example: "150"
   */
  id: string;

  /**
   * Order ID.
   * Example: "81"
   */
  orderId: string;

  /**
   * Is paid.
   * Example: "N", "Y"
   */
  paid: boolean;

  /**
   * Timestamp when it was paid.
   * Example: "2020-12-03T13:46:49+03:00"
   */
  datePaid: Date;

  /**
   * User ID who paid.
   * Example: "1"
   */
  empPaidId: number;

  /**
   * Payment system ID.
   * Example: "3"
   */
  paySystemId: string;

  /**
   * Example: "Y"
   */
  paySystemIsCash: boolean;

  /**
   * Payment system: transaction status.
   * Example:
   */
  psStatus?: string;

  /**
   * Payment system: transaction code.
   * Example:
   */
  psStatusCode?: string;

  /**
   * Payment system: payment ID.
   * Example:
   */
  psInvoiceId?: unknown;

  /**
   * Payment system: transaction description.
   * Example:
   */
  psStatusDescription?: string;

  /**
   * Payment system: message.
   * Example:
   */
  psStatusMessage?: string;

  /**
   * Payment system: transaction sum.
   * Example:
   */
  psSum?: number;

  /**
   * Payment system: transaction currency.
   * Example:
   */
  psCurrency?: string;

  /**
   * Payment system: response date.
   * Example:
   */
  psResponseDate?: Date;

  /**
   * Payment document number.
   * Example: ""
   */
  payVoucherNum: string;

  /**
   * Payment document timestamp.
   * Example: "2018-08-17T15:21:00+03:00"
   */
  payVoucherDate: Date;

  /**
   * Before which date the payment should be done.
   * Example:
   */
  datePayBefore?: Date;

  /**
   * Bill creation timestamp.
   * Example: "2020-12-03T12:18:57+03:00"
   */
  dateBill: Date;

  /**
   * External ID.
   * Example: "bx_5fc8ad811f0fc"
   */
  xmlId: string;

  /**
   * Sum to be paid.
   * Example: "4627.3000", 2255.16
   */
  sum: number;

  /**
   * Sum to be paid on delivery.
   * Example: "0.0000", 0
   */
  priceCod: number;

  /**
   * Currency ISO code.
   * Example: "RUB"
   */
  currency: string;

  /**
   * Payment system name.
   * Example: "Яндекс.Деньги"
   */
  paySystemName: string;

  /**
   * Example: "bx_5fa529f5ef3fa"
   */
  paySystemXmlId: string;

  /**
   * User ID who is responsible for the payment.
   * Example:
   */
  responsibleId?: number;

  /**
   * User ID who assigned responsible user.
   * Example:
   */
  empResponsibleId?: number;

  /**
   * Timestamp when the responsible user was assigned.
   * Example:
   */
  dateResponsibleId?: Date;

  /**
   * Comments for the payment.
   * Example:
   */
  comments?: string;

  /**
   * Company ID which receives the payment.
   * Example: "0"
   */
  companyId: string;

  /**
   * Payment return document number.
   * Example: ""
   */
  payReturnNum?: string;

  /**
   * Timestamp when payment return document created.
   * Example:
   */
  payReturnDate?: Date;

  /**
   * User ID who performed the payment return.
   * Example:
   */
  empReturnId?: number;

  /**
   * Comment for the payment return.
   * Example: ""
   */
  payReturnComment?: string;

  /**
   * Is payment returned.
   * Example: "N"
   */
  isReturn: boolean;

  /**
   * Is payment marked.
   * Example: "N"
   */
  marked: boolean;

  /**
   * Timestamp when the payment was marked.
   * Example:
   */
  dateMarked?: Date;

  /**
   * User ID who marked the payment.
   * Example:
   */
  empMarkedId?: number;

  /**
   * Reason the payment was marked.
   * Example:
   */
  reasonMarked?: string;

  /**
   * Is updated from 1C.
   * Example: "N"
   */
  updated1c: boolean;

  /**
   * 1C ID.
   * Example:
   */
  id1c?: string;

  /**
   * 1C version.
   * Example:
   */
  version1c?: string;

  /**
   * Is external payment.
   * Example: "N"
   */
  externalPayment: boolean;

  /**
   * Example: "68/1"
   */
  accountNumber: string;
}
