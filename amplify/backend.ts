import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './auth/data/mockData.js';

defineBackend({
  auth,
  data,
});
