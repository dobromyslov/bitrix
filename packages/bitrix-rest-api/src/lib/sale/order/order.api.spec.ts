import { OrderApi } from './order.api';
import { environment } from '../../../environments/environment';

describe('OrderApi', () => {
  const orderApi = new OrderApi(environment.webhookUrl);

  it('should list', async () => {
    const result = await orderApi.list({
      filter: {
        ">dateUpdate": '2020-12-03T00:00:00+03:00'
      },
      order: {
        dateUpdate: 'DESC'
      }
    });
    //console.log(result);
  });
});
