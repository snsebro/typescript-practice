import { Company } from './Company';
import { CustomMap } from './CustomMap';
import { User } from './user';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.createMarker(user.location)
customMap.createMarker(company.location)