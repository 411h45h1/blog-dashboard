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
    <Segment raised style={{ backgroundColor: "#DDBA3B" }}>
      <Form size={size}>
        <Form.Input
          label="Title"
          value={title}
          placeholder="Title"
          onChange={(e, { value }) => setTitle(value)}
        />
        <Form.Group inline>
          <label>Level of importance</label>
          <Form.Radio
            label="Lv.1"
            value="Lv.1"
            checked={radioValue === "Lv.1"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
          <Form.Radio
            label="Lv.2"
            value="Lv.2"
            checked={radioValue === "Lv.2"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
          <Form.Radio
            label="Lv.3"
            value="Lv.3"
            checked={radioValue === "Lv.3"}
            onChange={(e, { value }) => setRadioValue(value)}
          />
          <Form.Radio
            label="Lv.4"
            value="Lv.4"
            checked={radioValue === "Lv.4"}
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
