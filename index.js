const app = require('./Requires');
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

// Create an async function to handle query execution

// const oracledb = require('oracledb');
// // Set database connection details
// const dbConfig = {
//     user: "system",
//     password: "manager",
//     connectString: "localhost:1521/xe",
//   };
// const Query = async (sql) => {
//     let connection;
//     try {
//       connection = await oracledb.getConnection(dbConfig);
//       const result = await connection.execute(sql);
//       return result;
//     } catch (error) {
//       console.error(error);
//     } finally {
//       if (connection) {
//         try {
//           await connection.close();
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     }
//   }; 
// const Result = async (sql)=>{
//     const result = await Query(sql);
//     console.log(result.rows);
// }
// Result();