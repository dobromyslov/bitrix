import { AbstractDto } from '../abstract.dto';
import { PropertySettings } from 'bitrix-rest-api-core';

export class PropertySettingsDto extends AbstractDto implements PropertySettings {
  maxlength: number;
  minlength: number;
  multiline: boolean;
  pattern: string;
  size: number;
}
