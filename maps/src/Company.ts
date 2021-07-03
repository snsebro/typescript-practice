import faker from 'faker';

export class Company {
    constructor() {
        this.name = faker.company.companyName(),
        this.catchPhrase = faker.company.catchPhrase(),
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude()
        }
    }

    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
}