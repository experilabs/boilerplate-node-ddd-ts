// CQRS command (from params)
export default class DogUpdateCommand {
  private id: string;
  private name: string;
  private breed: string;

  constructor(id: string, name: string, breed: string) {
    this.id = id;
    this.name = name;
    this.breed = breed;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getRace(): string {
    return this.breed;
  }
}