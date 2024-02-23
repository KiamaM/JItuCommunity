import mssql from 'mssql'


export const sqlConfig = {
    user:'sa',
    password:'Haha',
    database: 'JituCommunity',
    server: 'DESKTOP-A58QF1P\\KIAMA',
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }
  
  console.log(sqlConfig);