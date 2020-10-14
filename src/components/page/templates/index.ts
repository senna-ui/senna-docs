import api from './api';
import apiIndex from './api-index';
import defaultTemplate from './default';
import error from './error';

export default {
  default: defaultTemplate,
  'api-index': apiIndex,
  api: api,
  error: error,
};
