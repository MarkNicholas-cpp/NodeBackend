const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:1521/xe",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    console.error(error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {
  
  let Sql, Message;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
  if(typeof Parameters[2] === 'string') {
    Details = eval(`(${Parameters[2]})`); 
  }
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.RollNumber}','${Details.Name}')`;
      Message = "Inserted Successfully";
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set RollNumber = '${Parameters[3].RollNumber}', Name = '${Parameters[3].Name}' where RollNumber = '${Details.RollNumber}'`;
      Message = `Succes Updating from ${Details.RollNumber, Details.Name} to ${Parameters[3].RollNumber, Parameters[3].Name}`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where RollNumber = '${Details.RollNumber}'`;
      Message = `Success deleting ${Details.RollNumber}`;
      break;
    case "Read":
        Sql = `select * from ${Parameters[0]}`;
        Message = `Showing all the values in the database ${Parameters[0]}`;
        if(Details.RollNumber){
          Sql = `select * from ${Parameters[0]} where RollNumber = '${Details.RollNumber}'`;
          Message = `${Details.RollNumber} Retrived`
        }
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  result.Message = Message;
  return result;
};
module.exports = Result;
