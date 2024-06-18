import React, { Suspense } from "react";
import Spinner from "../../../../views/spinner/Spinner";
import Logo from "../logo/Logo";
ss
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Spinner />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
