import { DataTypes, Sequelize } from "sequelize";
import DB from "../../../Par";

const userrr = [{id:'liza123@gmail.com', mail:'liza123@gmail.com', password:'12345678', nickname:'Liza', role:'user', subordin:'roma44@gmail.com'},
    {id:'roma44@gmail.com', mail:'roma44@gmail.com', password:'12345678', nickname:'Roma', role:'boss', subordin:''},
    {id:'julia777@gmail.com', mail:'julia777@gmail.com', password:'12345678', nickname:'Julia', role:'admin', subordin:''},
    {id:'den123@gmail.com', mail:'den123@gmail.com', password:'12345678', nickname:'Denis', role:'user', subordin:'Viktor666@gmail.com'},
    {id:'Vlad322@gmail.com', mail:'Vlad322@gmail.com', password:'12345678', nickname:'Vlad', role:'user', subordin:'Viktor666@gmail.com'},
    {id:'Viktor666@gmail.com', mail:'Viktor666@gmail.com', password:'12345678', nickname:'Viktor', role:'boss', subordin:''},
    {id:'oleksandra55@gmail.com', mail:'oleksandra55@gmail.com', password:'12345678', nickname:'Sasha', role:'user', subordin:''}
]



const sequelize = new Sequelize('users123', DB.user, DB.password, {
    host: 'localhost',
    dialect:  'mysql',
    operatorsAliases: false,
    port: "3306",
    define:{freezeTableName:true}
});


const User = sequelize.define('Uuu', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    nickname:{
        type: DataTypes.STRING,
        allowNull: false
    },
    role:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    subordin:{
        type: DataTypes.STRING,
        allowNull: true
    }
});

async function sync() {
    await sequelize.sync({ force: true });
}
  
sync();
  

userrr.forEach(async (i) =>{
    await User.create({id: i.id, mail:i.mail, nickname:i.nickname, role: i.role, password: i.password, subordin: i.subordin})
})

