import { TYPES as DOG_TYPES } from '@/dogs/infrastructure/d-injection/types';

const TYPES = {
  ...DOG_TYPES,

  JWT: Symbol.for('JWT'),

  EventBus: Symbol.for('EventBus'),
  DomainEventSubscriber: Symbol.for('DomainEventSubscriber'),

  CommandBus: Symbol.for('CommandBus'),
  CommandBusHandler: Symbol.for('CommandBusHandler'),

  QueryBus: Symbol.for('QueryBus'),
  QueryBusHandler: Symbol.for('QueryBusHandler'),

  Logger: Symbol.for('Logger')
};

export { TYPES };