import React from "react";
import { Media } from "../core/media";
import { Grid } from "semantic-ui-react";
import { ResponsiveInput } from "./responsive";

import {
  NOTE_SCROLL_MOBILE,
  NOTE_SCROLL_TABLET,
  NOTE_SCROLL_COMPUTER,
  NOTE_SCROLL_LARGESCREEN,
  NOTE_SCROLL_GREATER,
} from "./responsive/Note_Scroll";

const MainEvent = () => {
  return (
    <div>
      <Grid>
        <p id="title">Blog Dashboard</p>
      </Grid>
      <Grid>
        <Grid.Row>
          {/* @ mobile */}
          <Grid.Column as={Media} at="mobile" width={16}>
            <ResponsiveInput size={"large"} contentRows={1} />
          </Grid.Column>

          <Grid.Column as={Media} at="mobile" width={16}>
            <NOTE_SCROLL_MOBILE col={1} />
          </Grid.Column>

          {/* @ tablet */}

          <Grid.Column as={Media} at="tablet" width={9}>
            <ResponsiveInput size={"large"} contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="tablet" width={7}>
            <NOTE_SCROLL_TABLET col={1} />
          </Grid.Column>

          {/* @ computer */}

          <Grid.Column as={Media} at="computer" width={7}>
            <ResponsiveInput size={"large"} contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="computer" width={9}>
            <NOTE_SCROLL_COMPUTER col={2} />
          </Grid.Column>

          {/* @ largeScreen */}

          <Grid.Column as={Media} at="largeScreen" width={6}>
            <ResponsiveInput size={"big"} contentRows={3} />
          </Grid.Column>

          <Grid.Column as={Media} at="largeScreen" width={9}>
            <NOTE_SCROLL_LARGESCREEN col={3} />
          </Grid.Column>

          {/* @ greater */}

          <Grid.Column as={Media} greaterThan="largeScreen" width={6}>
            <ResponsiveInput size={"big"} contentRows={5} />
          </Grid.Column>

          <Grid.Column as={Media} greaterThan="largeScreen" width={10}>
            <NOTE_SCROLL_GREATER col={4} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainEvent;
