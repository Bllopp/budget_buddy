sortArrayByObjectKey:(array, key) => {
    return array.sort((a, b) => a[key] - b[key]);
  }

module.exports = sortArrayByObjectKey;