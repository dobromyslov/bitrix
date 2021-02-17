import { PropertyVariantApi } from './property-variant.api';
import { environment } from '../../../environments/environment';

describe('PropertyVariant', () => {
  it('should work', async () => {
    const result = await new PropertyVariantApi(environment.webhookUrl)
      .get("1");

    console.log(result);
  });
});
