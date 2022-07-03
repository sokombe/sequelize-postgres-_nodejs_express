
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('tasks', {
        name: {
            type: DataTypes.STRING
        },
        done: {
            type: DataTypes.BOOLEAN ,
            defaultValue:false,
        },
        id_project: {
            type: DataTypes.INTEGER,
            reference:{
                model:{
                    tablename:'projects',
                    key:"id"
                }
            }
        },
    }, )
    return Task
}