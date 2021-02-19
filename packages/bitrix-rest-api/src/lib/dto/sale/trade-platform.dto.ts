import { TradePlatform } from 'bitrix-rest-api-core';
import { AbstractDto } from '../abstract.dto';
import { Transform, Type } from 'class-transformer';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class TradePlatformDto extends AbstractDto implements TradePlatform {
  @Type(() => String)
  @Transform(yesNoTransformer)
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
