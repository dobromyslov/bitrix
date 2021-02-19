import { Payment } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { dateTimeTransformer } from '../../transformers/date-time-transformer';
import { AbstractDto } from '../abstract.dto';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class PaymentDto extends AbstractDto implements Payment {
  accountNumber: string;
  comments: string;
  companyId: string;
  currency: string;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateBill: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateMarked: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  datePaid: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  datePayBefore: Date;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  dateResponsibleId: Date;

  empMarkedId: number;
  empPaidId: number;
  empResponsibleId: number;
  empReturnId: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  externalPayment: boolean;

  id: string;
  id1c: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  isReturn: boolean;

  @Type(() => String)
  @Transform(yesNoTransformer)
  marked: boolean;

  orderId: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  paid: boolean;

  payReturnComment: string;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  payReturnDate: Date;

  payReturnNum: string;
  paySystemId: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  paySystemIsCash: boolean;

  paySystemName: string;
  paySystemXmlId: string;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  payVoucherDate: Date;

  payVoucherNum: string;
  priceCod: number;
  psCurrency: string;
  psInvoiceId: unknown;

  @Type(() => String)
  @Transform(dateTimeTransformer)
  psResponseDate: Date;

  psStatus: string;
  psStatusCode: string;
  psStatusDescription: string;
  psStatusMessage: string;
  psSum: number;
  reasonMarked: string;
  responsibleId: number;
  sum: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  updated1c: boolean;

  version1c: string;
  xmlId: string;
}
