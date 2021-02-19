import { AbstractDto } from '../abstract.dto';
import { Status } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class StatusDto extends AbstractDto implements Status {
  color: string;
  id: string;

  @Type(() => String)
  @Transform(yesNoTransformer)
  notify: boolean;

  sort: number;
  type: string;
  xmlId: string;
}
