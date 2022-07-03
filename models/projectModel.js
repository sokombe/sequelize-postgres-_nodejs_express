
module.exports = (sequelize, DataTypes) => {
    const Projet = sequelize.define('projects', {
        name: {
            type: DataTypes.STRING
        },
        priority: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.TEXT
        },
    },
    )
    // we create the foreign key in article from category
    //Projet.hasOne(taskModel)
    return Projet
}
