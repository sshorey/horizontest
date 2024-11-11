import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './auth/mockData.js';

defineBackend({
  auth,
  data,
});
