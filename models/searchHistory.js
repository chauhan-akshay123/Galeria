module.exports = (sequelize, DataTypes) => {
    const SearchHistory = sequelize.define(
      'SearchHistory',
      {
        query: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          references: { model: 'User', key: 'id' },
          allowNull: false,
        },
        timestamp: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        timestamps: true,
      }
    );
  
    SearchHistory.associate = (models) => {
      SearchHistory.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
    };
  
    return SearchHistory;
  };
  