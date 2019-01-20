import { IData } from '../interfaces/IData';

export class Data implements IData {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public city: string,
    public category: string,
    public price: number
  ) {}
}