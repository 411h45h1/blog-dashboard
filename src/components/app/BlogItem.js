import React, { useContext } from "react";
import { Grid, Segment, Icon, Card, Label } from "semantic-ui-react";
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
            backgroundColor: "#635435",
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
            size="medium"
            attached="top left"
            content="❌"
            onClick={() => removeBlog(i.bid)}
            style={{
              backgroundColor: "#635435",
            }}
          />
          <Label
            size="tiny"
            color="black"
            attached="bottom left"
            content={i.date}
          />

          {i.imageRef && (
            <Label
              style={{ backgroundColor: "#635435", padding: 5 }}
              size="tiny"
              attached="bottom right"
            >
              <Icon size="big" name="picture" style={{ color: "white" }} />
            </Label>
          )}

          <Card
            header={i.title}
            description={i.summary}
            style={{
              marginTop: 20,
              marginBottom: 30,
              backgroundColor: "whitesmoke",
            }}
          />
        </Segment>
      </Grid.Column>
    ))
  );
};

export default BlogItem;
