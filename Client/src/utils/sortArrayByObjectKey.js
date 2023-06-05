function sortArrayByObjectKey (array, key) {
    return array.sort((a, b) => a[key] - b[key]);
  }

export {sortArrayByObjectKey};