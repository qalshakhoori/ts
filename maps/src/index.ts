/// <reference types="@types/googlemaps" />

import { User } from './User';
import { Map } from './Map';
import { Company } from './Company';

const user = new User();
const company = new Company();
const map = new Map('map');

map.addMarker(user);
map.addMarker(company);
