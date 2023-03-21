const Mapping = async (Array) => {
    const Obj = Array.map(([rollNumber, name]) => ({ 
        Name: name.split(" ")[0], 
        Roll_Number: rollNumber 
      }));
      return Obj;
};module.exports = Mapping;
