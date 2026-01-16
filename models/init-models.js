import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _user_role from  "./user_role.js";

export default function initModels(sequelize) {
  const user_role = _user_role.init(sequelize, DataTypes);


  return {
    user_role,
  };
}
