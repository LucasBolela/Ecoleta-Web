
const sqlite3 = require("sqlite3").verbose()

// Creat object on DataBase
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


// db.serialize(()=>{
//   //Creating table
  // db.run(`
  //   CREATE TABLE IF NOT EXISTS places (
  //     id INTEGER PRIMARY KEY AUTOINCREMENT,
  //     image TEXT,
  //     name TEXT,
  //     address TEXT,
  //     address2 TEXT,
  //     state TEXT,
  //     city TEXT,
  //     items TEXT
  //   );
  // `)

  // //Put data in table
  // const query = `
  //   INSERT INTO places (
  //     image,
  //     name,
  //     address,
  //     address2,
  //     state,
  //     city,
  //     items 
  //   ) VALUES (?,?,?,?,?,?,?);
  // `
  // const values = [
  //   "https://images.unsplash.com/photo-1591001706951-7505cb018306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  //   "Colectoria",
  //   "Guilherme Gemballa, Jardim América",
  //   "Número 260",
  //   "Santa Catarina",
  //   "Rio do Sul",
  //   "Residuos Eletronicos e Lampadas"
  // ]
  // function afterinsertData(err){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Cadastrado com sucesso!")
  //   console.log(this)

  // }
  // db.run(query, values, afterinsertData)
  
  // //Get data in table
  // db.all(`SELECT * FROM places`, function(err,rows){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Aqui estão os seus registros")
  //   console.log(rows)
  // })
   
  //Delete data in table
  // db.run(`DELETE FROM places WHERE id = ?`,[0], function(err){
  //   if(err){
  //     return console.log(err)
  //   }
  //   console.log("Registros deletados com sucesso!")
  // })

// })