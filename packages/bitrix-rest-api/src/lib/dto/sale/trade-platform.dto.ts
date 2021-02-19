import { TradePlatform } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';

export class TradePlatformDto extends AbstractDto implements TradePlatform {
  active: boolean;
  catalogSectionTabClassName: unknown;
  class: string;
  code: string;
  description: string;
  id: number;
  name: string;
  settings: unknown | unknown[];
  xmlId: string;
}
