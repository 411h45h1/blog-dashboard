import React, { useState, useContext } from "react";
import { Segment, Form } from "semantic-ui-react";
import { addBlogEntries } from "../../api/blog";
import AppContext from "../../context/appContext";

const ResponsiveInput = ({ contentRows, size }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [radioValue, setRadioValue] = useState(null);
  const state = useContext(AppContext);
  const { username, loadBlog } = state;

  let importance = radioValue;

  if (author === "" && username) {
    setAuthor(username);
  }

  const handleSubmit = async () =>
    await addBlogEntries(author, title, summary, content, importance).then(() =>
      loadBlog()
    );

  return (
    <Segment raised style={{ backgroundColor: "#8A764A" }}>
      <Form size={size}>
        <Form.Input
          label="Title"
          value={title}
          placeholder="Title"
          onChange={(e, { value }) => setTitle(value)}
        />
        <Form.Group inline>
          <label>Color code:</label>
          <Form.Radio
            label="gray"
            value="basic"
            checked={radioValue === "basic"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
          <Form.Radio
            label="blue"
            value="info"
            checked={radioValue === "info"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
          <Form.Radio
            label="orange"
            value="warning"
            checked={radioValue === "warning"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
          <Form.Radio
            label="red"
            value="danger"
            checked={radioValue === "danger"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
        </Form.Group>
        <Form.TextArea
          rows={contentRows}
          label="Summary"
          value={summary}
          placeholder="Enter your summarize your blog post here"
          onChange={(e, { value }) => setSummary(value)}
        />
        <Form.TextArea
          rows={contentRows}
          label="Content"
          value={content}
          placeholder="Enter your blog content here"
          onChange={(e, { value }) => setContent(value)}
        />

        <Form.Button color="black" onClick={() => handleSubmit()}>
          Submit
        </Form.Button>
      </Form>
    </Segment>
  );
};

export default ResponsiveInput;
