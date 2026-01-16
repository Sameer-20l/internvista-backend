import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_role extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    role_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user_role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_role_pkey",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
