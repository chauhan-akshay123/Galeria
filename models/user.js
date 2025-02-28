module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'User',
      {
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
      },
      {
        timestamps: true,
      }
    );
  
    User.associate = (models) => {
      User.hasMany(models.Photo, { foreignKey: 'userId', onDelete: 'CASCADE' });
      User.hasMany(models.SearchHistory, { foreignKey: 'userId', onDelete: 'CASCADE' });
    };
  
    return User;
  };
  