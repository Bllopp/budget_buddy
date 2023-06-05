function dataToArray (data, search) {
    const values = [];
    data.forEach(obj => {
      Object.entries(obj).forEach(([key, value]) => {
        if (key === search) {
          values.push(value);
        }
      });
    });
    if(values.length === 0) {
        throw new Error("No values found in data");
    }
    else return values;
  }

export {dataToArray};
