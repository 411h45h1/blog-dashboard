import React, { useState, useEffect, useContext } from "react";
import { Segment, Form, Label } from "semantic-ui-react";
import { addBlogEntries } from "../../api/blog";
import AppContext from "../../context/appContext";

const ResponsiveInput = ({ contentRows, size }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [radioValue, setRadioValue] = useState(null);
  const [image, setImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [imageSection, setImageSection] = useState(false);

  const [previewImg, setPreviewImg] = useState(null);

  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const state = useContext(AppContext);
  const { username, loadBlog } = state;

  let importance = radioValue;

  if (author === "" && username) {
    setAuthor(username);
  }

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
      setImagePreviewUrl(reader.result);
      setShowPreview(true);
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (image && imagePreviewUrl) {
      setPreviewImg(<img src={imagePreviewUrl} alt="preview" />);
    }
  }, [image, imagePreviewUrl]);

  const handleSubmit = async () =>
    await addBlogEntries(author, title, summary, content, importance).then(() =>
      loadBlog()
    );

  const onHidePreview = () => {
    setShowPreview(false);
  };

  const showAddImageSection = () => setImageSection(!imageSection);

  return (
    <Segment
      raised
      style={{
        backgroundColor: "#8A764A",
        maxHeight: "65vh",
        overflowY: imageSection ? "scroll" : null,
      }}
    >
      <Label
        as="a"
        attached="top left"
        content={imageSection ? "Hide image section" : "Add an image"}
        color="black"
        onClick={() => showAddImageSection()}
      />

      <Form size={size}>
        {imageSection && (
          <div className="previewComponent">
            <Form.Input
              label="Image Upload"
              type="file"
              onChange={(e) => handleImageChange(e)}
            />
            <Form.Button
              type="reset"
              value="Clear Image"
              style={{
                backgroundColor: "#635435",
                color: "white",
              }}
              compact
              onClick={() => onHidePreview()}
            >
              Reset Image
            </Form.Button>

            {showPreview && (
              <Segment className="imgPreview" inverted>
                <Label
                  as="a"
                  attached="top right"
                  style={{
                    backgroundColor: "white",
                    color: "black",
                  }}
                  onClick={() => onHidePreview()}
                >
                  Hide
                </Label>

                {previewImg}
              </Segment>
            )}
          </div>
        )}

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
