import React, { Suspense } from "react";
import Spinner from "../../../../views/spinner/spinner";


const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
