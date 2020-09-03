import firebase from "../firebase";
import "firebase/firestore";
import moment from "moment";

const db = firebase.firestore();

export const getBlogEntries = async () => {
  const collection = db.collection("blog");

  const Blog = await collection.get();
  return Blog.docs.map((doc) => {
    return { bid: doc.id, ...doc.data() };
  });
};

export const addBlogEntries = async (
  author,
  title,
  summary,
  content,
  importance
) => {
  const collection = db.collection("blog");
  const bid = Date.now();

  const req = await collection.doc(`${bid}`).set({
    bid: bid,
    author,
    title,
    summary,
    content,
    importance,
    date: `${moment().format("lll")}`,
  });

  return req;
};

export const deleteBlogEntries = async (bid) => {
  const collection = db.collection("blog");

  const req = await collection.doc(`${bid}`).delete();
  return req;
};
