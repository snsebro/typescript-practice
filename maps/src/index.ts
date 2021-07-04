import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './user';

const customMap = new CustomMap();

const user = new User();

const company = new Company();

console.log(user)
console.log(company)

customMap.createMarker(user.location)
customMap.createMarker(company.location)