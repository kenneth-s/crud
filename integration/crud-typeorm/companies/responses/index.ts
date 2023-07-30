import { SerializeOptions } from '@kenneth-s/crud';
import { GetCompanyResponseDto } from './get-company-response.dto';

export const serialize: SerializeOptions = {
  get: GetCompanyResponseDto,
};
