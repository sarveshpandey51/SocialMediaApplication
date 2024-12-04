module.exports = (sequelize, DataTypes) => {  //Sequelize is used for connection

    //Columns
    const Posts = sequelize.define("Posts", {
            title : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            postText : {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            username : {
                type: DataTypes.STRING,
                allowNull: false,
            },
    });

    return Posts;
};