import React, { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  return (
    <React.Fragment>
      <DataContext.Provider
        value={{
          account,
          setAccount,
        }}
      >
        {children}
      </DataContext.Provider>
    </React.Fragment>
  );
};

export default DataProvider;
