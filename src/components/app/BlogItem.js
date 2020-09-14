import React, { useContext, useState } from "react";
import { Grid, Segment, Icon, Card, Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const BlogItem = () => {
  const state = useContext(AppContext);
  const { blogEntries, removeBlog } = state;
  const [showImage, setShowImage] = useState(null);

  const onImage = (bid) => (showImage ? setShowImage(null) : setShowImage(bid));

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
            id="blogButton"
            as="a"
            size="medium"
            attached="top left"
            content="❌"
            onClick={() => removeBlog(i.bid)}
          />
          <Label
            size="tiny"
            color="black"
            attached="bottom left"
            content={i.date}
          />

          {i.imageRef && (
            <Label
              id="blogButton"
              as="a"
              onClick={() => onImage(i.bid)}
              size="tiny"
              attached="bottom right"
            >
              <Icon size="big" name="picture" style={{ color: "white" }} />
            </Label>
          )}

          {i.imageRef && showImage === i.bid && (
            <img
              src={i.imageRef.downloadLink}
              height="100%"
              width="100%"
              style={{ marginTop: "7%" }}
            />
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
