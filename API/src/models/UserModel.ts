import * as Sequelize from "sequelize";

import { BaseModelInterface } from "../interfaces/BaseModelInterface";

export interface UserAttributes {
  id?: number;
  name?: string;
  email?: string;
  createAt?: string;
  updateAt?: string;
}

export interface UserInstance
  extends Sequelize.Instance<UserAttributes>,
    UserAttributes {}

export interface UserModel
  extends BaseModelInterface,
    Sequelize.Model<UserInstance, UserAttributes> {}

export default (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): UserModel => {
  const User: UserModel = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "users"
    }
  );

  return User;
};
