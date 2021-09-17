import {
  request,
  summary,
  path,
  body,
  tags,
  Context,
  responses
} from 'koa-swagger-decorator';
import DogPutController from '@/dogs/gateway/controllers/dog.put.controller';
import DogUpdate from '@/dogs/application/update-dog';
import DogContainer from '@/dogs/infrastructure/di/config';

export default class DogPutRouter {
  @request('put', '/dogs/{id}')
  @summary('Update a dog by id')
  @tags(['Dogs'])
  @path({
    id: { type: 'string', required: true }
  })
  @body({
    name: {
      type: 'string',
      required: true
    },
    breed: {
      type: 'string',
      required: true
    }
  })
  @responses({ 200: { description: 'Updated' }, 500: { description: 'Error' } })
  static async update(ctx: Context) {
    try {
      // Get Params
      const { id } = ctx.validatedParams;
      const { name, breed } = ctx.validatedBody;
      // Get Container
      const dogUpdate = DogContainer.get<DogUpdate>(DogUpdate);
      // Run controller
      const controller = new DogPutController(dogUpdate);
      await controller.update({ id, name, breed });
      // Successful response
      ctx.body = { result: 'Updated' };
    } catch (error) {
      // Error response
      ctx.status = 500;
      ctx.body = {
        error
      };
    }
  }
}