import { DataSource } from 'typeorm';
import { dbhost, dbpassword, dbuser } from './dbconfig';

exports.default = new DataSource({
  type: 'postgres',
  host: dbhost,
  port: 5432,
  username: dbuser,
  password: dbpassword,
  database: 'nestjsx_crud',
  entities: ['./**/*.entity.ts'],
  migrationsTableName: 'orm_migrations',
  migrations: ['./seeds.ts'],
});
