import { ParsedRequestParams } from '@kenneth-s/crud-request';

import { CrudRequestOptions } from '../interfaces';

export interface CrudRequest {
  parsed: ParsedRequestParams;
  options: CrudRequestOptions;
}
