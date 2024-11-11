import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './src/data/mockData.js';

defineBackend({
  auth,
  data,
});
