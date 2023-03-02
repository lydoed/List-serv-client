import { Injectable } from '@nestjs/common';
import { Sequelize, DataTypes } from 'sequelize';
import DB from '../../Par'


const sequelize = new Sequelize('users123', DB.user, DB.password, {
  host: 'localhost',
  dialect:  'mysql',
  define:{freezeTableName:true}
});



const UUUser = sequelize.define('Uuu', {
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

UUUser.removeAttribute('createdAt');
UUUser.removeAttribute('updatedAt');


const getUsers = async ()=>{return await UUUser.findAll({raw:true})}
const getLog = async (user:any):Promise<object>=>{return await UUUser.findOne({raw:true, where:{mail: user.mail, password:user.password}})}
const getReg = async (user:any)=>{await UUUser.create({id: user.mail, mail: user.mail, nickname: user.nickname, role: 'user', password: user.password, subordin: ''})}

@Injectable()
export class AppService {
  async getLogin(tok : any): Promise<any> {
    const login = await getLog(tok)
    if(login === null){
      return {id: false}
    }else{return login}   
  }

  
  async getRegister(inf : any): Promise<object>{
    if(await UUUser.findOne({raw:true, where:{mail: inf.mail}}) === null){
      await getReg(inf)
      return getLog(inf)
    }else{return {check:false}}
  }


  async getList(tok : any): Promise<object>{
    if(tok.role ==='admin'){
      return await getUsers()
    }else if(tok.role ==='boss'){
      return await UUUser.findAll({raw:true, where:{role: 'user'}})
    }else if(tok.role ==='user'){
      return await UUUser.findOne({raw:true, where:{mail: tok.mail}})
    }
  }


  async getAuth(inf : any): Promise<object>{
    if(await getLog(inf) !== null){
      return {check:true}
    }else{
      return {check:false}
    }
  }


  async getAdd(inf : any): Promise<object>{
    if(await getLog(inf.about) === null){
      return {check:false}
    }else{
      await UUUser.update({subordin : inf.boss},{where : {id : inf.user}})
      return await UUUser.findAll({raw:true, where:{role: 'user'}})
    }
  }


  async getDelete(inf : any): Promise<object>{
    if(await getLog(inf.about) === null){
      return {check:false}
    }else{
      await UUUser.update({subordin : ''},{where : {id : inf.user}})
      return await UUUser.findAll({raw:true, where:{role: 'user'}})
    }   
  }
}
