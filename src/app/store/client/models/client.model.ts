export interface ClientApiModel {
  id: number;
  company: string;
  description: string;
  address: string;

  name: string;
  email: string;
  phone: number;
}

export class Client {
  id: number;
  company: string;
  description: string;
  address: string;

  name: string;
  email: string;
  phone: number;

  constructor(raw: ClientApiModel) {
    this.id = raw.id;
    this.company = raw.company;
    this.description = raw.description;
    this.address = raw.address;

    this.name = raw.name;
    this.email = raw.email;
    this.phone = raw.phone;
  }

  get emailLink() {
    return `mailto: ${this.email}`;
  }

  get telLink() {
    return `tel: ${this.phone}`;
  }


}
