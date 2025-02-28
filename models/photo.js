module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define(
      'Photo',
      {
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        altDescription: {
          type: DataTypes.STRING,
        },
        tags: {
          type: DataTypes.JSON, // To store an array of tags
          allowNull: false,
        },
        dateSaved: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        userId: {
          type: DataTypes.INTEGER,
          references: { model: 'User', key: 'id' },
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  
    Photo.associate = (models) => {
      Photo.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
      Photo.hasMany(models.Tag, { foreignKey: 'photoId', onDelete: 'CASCADE' });
    };
  
    return Photo;
  };
  