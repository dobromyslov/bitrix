import { classToPlain } from 'class-transformer';

export class AbstractDto {
  constructor(data?: Partial<AbstractDto>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  toJSON() {
    return classToPlain(this);
  }
}
