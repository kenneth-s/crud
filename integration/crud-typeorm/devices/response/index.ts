import { SerializeOptions } from '@kenneth-s/crud';
import { DeleteDeviceResponseDto } from './delete-device-response.dto';

export const serialize: SerializeOptions = {
  delete: DeleteDeviceResponseDto,
};
