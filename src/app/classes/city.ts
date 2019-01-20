import { ICity } from '../interfaces/ICity';

export class City implements ICity {
  constructor(
    public id: number,
    public name: string
  ) {}
}