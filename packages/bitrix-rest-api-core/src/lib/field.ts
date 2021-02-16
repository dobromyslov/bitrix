import { FieldType } from './field-type';

export interface Field {
  isImmutable: boolean;
  isReadOnly: boolean;
  isRequired: boolean;
  type: FieldType;
}
