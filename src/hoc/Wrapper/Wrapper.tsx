import React, { PropsWithChildren } from "react";
const Wrapper = (props: PropsWithChildren) : JSX.Element => { return <>{props.children}</>; }
export default Wrapper;