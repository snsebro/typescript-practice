import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './user';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.createMarker(user, `${user.name} is located at lat: ${user.location.lat} lng: ${user.location.lng}`);
customMap.createMarker(company, `${company.name}, ${company.catchPhrase}, located at lat: ${company.location.lat} lng: ${company.location.lng}`);