import { AbstractDto } from '../abstract.dto';
import { PropertySettings } from 'bitrix-rest-api-core';
import { Transform, Type } from 'class-transformer';
import { yesNoTransformer } from '../../transformers/yes-no-transformer';

export class PropertySettingsDto extends AbstractDto implements PropertySettings {
  maxlength: number;
  minlength: number;

  @Type(() => String)
  @Transform(yesNoTransformer)
  multiline: boolean;

  pattern: string;
  size: number;
}
