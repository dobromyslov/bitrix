import { AbstractDto } from '../abstract.dto';
import { TradeBinding } from 'bitrix-rest-api-core';

export class TradeBindingDto extends AbstractDto implements TradeBinding {
  externalOrderId: string;
  id: number;
  orderId: number;
  params: unknown;
  tradingPlatformId: number;
  tradingPlatformXmlId: string;
  xmlId: string;
}
