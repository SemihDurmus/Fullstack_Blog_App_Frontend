import axios from "axios";
import React, { useState, useEffect } from "react";

import "./userStatsStyle.css";

// ------------MAIN FUNCTION--------

export default function Stats({ username }) {
  const [postList, setPostList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [allValues, setAllValues] = useState({
    publishedCount: 0,
    totalCommentCount: 0,
    totalViewCount: 0,
    totalLikeCount: 0,
  });

  //----------Fetch Post List Data------------
  const fetchPostData = async () => {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `https://fs-blog-backend.herokuapp.com/api/post-list/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: token ? "Token " + token : null,
          },
        }
      );
      setPostList(result.data);
    } catch ({ response }) {
      if (response) {
        console.log("No data");
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  //-------------Filter User Posts----------------
  const filteredPosts = () => {
    const filteredData = postList.filter((item) => {
      return item.author_name == username;
    });
    console.log(filteredData);
    setFilteredList(filteredData);
  };
  //--------------Filtered List Logical Operations----------
  const logicalOperations = () => {
    let totalComment = 0;
    let totalView = 0;
    let totalLike = 0;

    const publishedPostCount = filteredList.filter((item) => {
      return item.status == "published";
    });

    const sumOfCommentCount = () => {
      for (const iterator of filteredList) {
        totalComment += iterator.comment_count;
      }
      return totalComment;
    };

    const sumOfViewCount = () => {
      for (const iterator of filteredList) {
        totalView += iterator.view_count;
      }
      return totalView;
    };

    const sumOfLikeCount = () => {
      for (const iterator of filteredList) {
        totalLike += iterator.like_count;
      }
      return totalLike;
    };

    sumOfCommentCount();
    sumOfViewCount();
    sumOfLikeCount();
    setAllValues({
      ...allValues,
      publishedCount: publishedPostCount.length,
      totalCommentCount: totalComment,
      totalViewCount: totalView,
      totalLikeCount: totalLike,
    });
  };

  const body = (
    <div className="statsContainer">
      <h2>Post Statistics</h2>
      <table>
        <tr>
          <td>Number of all stories</td>
          <td>{filteredList.length}</td>
        </tr>
        <tr>
          <td>Number of published stories</td>
          <td>{allValues.publishedCount}</td>
        </tr>
        <tr>
          <td>Number of draft stories</td>
          <td>{filteredList.length - allValues.publishedCount}</td>
        </tr>
        <tr>
          <td>Number of post views</td>
          <td>{allValues.totalViewCount}</td>
        </tr>
        <tr>
          <td>Number of received comments</td>
          <td>{allValues.totalCommentCount}</td>
        </tr>
        <tr>
          <td>Number of received likes</td>
          <td>{allValues.totalLikeCount}</td>
        </tr>
      </table>
    </div>
  );

  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    filteredPosts();
  }, [postList]);

  useEffect(() => {
    logicalOperations();
  }, [filteredList]);

  return <div>{body}</div>;
}