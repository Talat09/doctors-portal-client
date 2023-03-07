import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#19D3AE"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
