import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('police-system', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});