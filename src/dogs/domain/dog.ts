import DogId from '@/dogs/domain/dog.id';
import DogName from '@/dogs/domain/dog.name';
import DogBreed from '@/dogs/domain/dog.breed';
import DogDate from '@/dogs/domain/dog.date';
import DogCreatedDomainEvent from './events/dog.created.domain.event';
import { Entity } from '@/shared/domain/entity';

// Aggregate root / entity
export default class Dog extends Entity {
  private id: DogId;
  private name: DogName;
  private breed: DogBreed;
  private date: DogDate;

  constructor(id: DogId, name: DogName, breed: DogBreed, date: DogDate) {
    super();
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.date = date;
  }

  static create(id: DogId, name: DogName, breed: DogBreed, date: DogDate): Dog {
    const dog = new Dog(id, name, breed, date);

    dog.record(
      new DogCreatedDomainEvent(
        id.getValue(),
        name.getValue(),
        breed.getValue()
      )
    );

    return dog;
  }

  static fromPrimitives(
    id: string,
    name: string,
    breed: string,
    date: Date
  ): Dog {
    const dogId = DogId.fromValue(id);
    const dogName = DogName.fromValue(name);
    const dogRace = DogBreed.fromValue(breed);
    const dogDate = DogDate.fromValue(date);
    return new Dog(dogId, dogName, dogRace, dogDate);
  }

  toPrimitives() {
    throw new Error('Method not implemented.');
  }

  getID(): DogId {
    return this.id;
  }

  getName(): DogName {
    return this.name;
  }

  getRace(): DogBreed {
    return this.breed;
  }

  getDate(): DogDate {
    return this.date;
  }
}
