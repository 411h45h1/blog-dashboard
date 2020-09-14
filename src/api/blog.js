import firebase from "../firebase";
import "firebase/firestore";
import "firebase/firebase-storage";

import moment from "moment";

const db = firebase.firestore();
const storageRef = firebase.storage().ref();

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
  importance,
  imageRef
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
    imageRef,
    date: `${moment().format("lll")}`,
  });

  return req;
};

export const deleteBlogEntries = async (bid) => {
  const collection = db.collection("blog");

  const req = await collection.doc(`${bid}`).delete();
  return req;
};

export const dbImageUpload = async (image) => {
  let imageId = Date.now() + Math.floor(Math.random() * 9000) + 1000;
  let blogImageRef = storageRef.child(`blog/images/${imageId}.jpg`);

  let uploadTask = async () => await blogImageRef.put(image);

  let getSnap = uploadTask().then(
    async (snapshot) => await snapshot.ref.getDownloadURL()
  );

  let getDownloadLink = getSnap.then(async (res) => await res);

  let downloadLink = await getDownloadLink;

  return { imageId, downloadLink };
};
