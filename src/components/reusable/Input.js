import React from "react";
import { Input as SemanticInput } from "semantic-ui-react";

const Input = ({ errorText, ...props }) => (
  <div>
    <SemanticInput {...props} />
    {errorText ? <p>{errorText}</p> : null}
  </div>
);

export default Input;
