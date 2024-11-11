import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from 'https://github.com/sshorey/horizontest/tree/9922f752b624ef7b901708dc1dff044108439571/src/data';

defineBackend({
  auth,
  data,
});
