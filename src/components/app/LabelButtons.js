import React, { useContext } from "react";
import { Grid, Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const LabelButtons = () => {
  const state = useContext(AppContext);
  const { onLogout } = state;
  return (
    <>
      <Grid>
        <Grid.Column floated="right" width={6}>
          <Label.Group>
            {/* <Label
              as={"a"}
              color="black"
              content="Click here for the repository"
              href="https://github.com/AhmedAlihashi/noted"
              target="_blank"
              rel="noopener noreferrer"
            /> */}
            <Label
              as={"a"}
              color="grey"
              content="Log Out"
              onClick={() => onLogout()}
            />
            <Label
              as={"a"}
              icon="power off"
              color="red"
              onClick={() => {
                window.close();
              }}
            />
          </Label.Group>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default LabelButtons;
