function useJSONToCSV(objArray, keys) {
    return [
      keys.join(","),
      ...objArray.map((row) => keys.map((k) => row[k] || "").join(",")),
    ].join("\n");
  }