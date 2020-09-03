import React, { useContext } from "react";
import { Grid, Segment, Card, Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const BlogItem = () => {
  const state = useContext(AppContext);
  const { blogEntries, removeBlog } = state;

  return (
    blogEntries &&
    blogEntries.map((i, k) => (
      <Grid.Column key={k}>
        <Segment
          raised
          style={{
            backgroundColor: "#C9BF77",
          }}
        >
          {i.importance && (
            <Label
              color={
                i.importance === "basic"
                  ? "grey"
                  : i.importance === "info"
                  ? "blue"
                  : i.importance === "warning"
                  ? "orange"
                  : i.importance === "danger"
                  ? "red"
                  : null
              }
              attached="top right"
            />
          )}
          <Label
            as="a"
            size="tiny"
            attached="top left"
            content="❌"
            onClick={() => removeBlog(i.bid)}
            style={{
              backgroundColor: "#C9BF77",
            }}
          />
          <Label
            size="tiny"
            color="black"
            attached="bottom left"
            content={i.date}
          />

          <Card
            header={i.title}
            description={i.summary}
            style={{
              marginTop: 20,
              marginBottom: 30,
              backgroundColor: "#F2F2EF",
            }}
          />
        </Segment>
      </Grid.Column>
    ))
  );
};

export default BlogItem;
