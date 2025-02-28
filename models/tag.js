module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define(
      'Tag',
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        photoId: {
          type: DataTypes.INTEGER,
          references: { model: 'Photo', key: 'id' },
          allowNull: false,
        },
      },
      {
        timestamps: true,
      }
    );
  
    Tag.associate = (models) => {
      Tag.belongsTo(models.Photo, { foreignKey: 'photoId', onDelete: 'CASCADE' });
    };
  
    return Tag;
  };
  