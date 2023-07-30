import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { isNil } from '@kenneth-s/util';
import { dbhost, dbpassword, dbuser } from './dbconfig';

const type = (process.env.TYPEORM_CONNECTION as any) || 'postgres';

export const withCache: TypeOrmModuleOptions = {
  type,
  host: dbhost,
  port: type === 'postgres' ? 5432 : 3316,
  username: type === 'mysql' ? 'nestjsx_crud' : dbuser,
  password: type === 'mysql' ? 'nestjsx_crud' : dbpassword,
  database: 'nestjsx_crud',
  synchronize: false,
  logging: !isNil(process.env.TYPEORM_LOGGING) ? !!parseInt(process.env.TYPEORM_LOGGING, 10) : true,
  entities: [join(__dirname, './**/*.entity{.ts,.js}')],
};
