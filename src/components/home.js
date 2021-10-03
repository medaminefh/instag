import React, { useState, useEffect, useContext } from "react";
import { v4 as uuid } from "uuid";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState([]);
  const SERVER =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_SERVER
      : process.env.REACT_APP_ONLINE_SERVER;

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      fetch(SERVER + "/posts", {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    }
  }, []);

  const comment = (e, text, postId) => {
    e.preventDefault();
    fetch(SERVER + "/posts/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        const newData = data.map((i) => {
          if (i._id === d._id) return d;
          return i;
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  const likePost = (id) => {
    fetch(SERVER + "/posts/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        const newData = data.map((i) => {
          if (i._id === d._id) return d;
          return i;
        });
        if (data.includes(d._id)) return;
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  const unLikePost = (id) => {
    fetch(SERVER + "/posts/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        const newData = data.map((i) => {
          if (i._id === d._id) return d;
          return i;
        });

        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  const deletePost = (id) => {
    fetch(SERVER + `/posts/delete/${id}`, {
      method: "delete",
      headers: {
        Authorization: localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((d) => {
        const newData = data.filter((i) => i._id !== d._id);
        setData(newData);
      });
  };

  return (
    <>
      {data.length === 0 ? (
        <h2 className="center">No Posts Found !!</h2>
      ) : (
        <>
          <div className="home">
            {data.map(
              ({
                postedBy: { name, _id: id },
                comments,
                _id,
                likes,
                title,
                createdAt,
                body,
                photo,
              }) => (
                <div key={uuid()}>
                  <div
                    style={{ position: "relative" }}
                    className="card homeCard"
                  >
                    <h5 style={{ padding: "10px 23px" }}>
                      <Link
                        to={state._id === id ? "/profile" : "/profile/" + id}
                      >
                        {name}
                      </Link>
                    </h5>
                    {id === state._id ? (
                      <i
                        style={{
                          cursor: "pointer",
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        }}
                        onClick={() => deletePost(_id)}
                        className="material-icons"
                      >
                        clear
                      </i>
                    ) : null}
                    <span style={{ float: "right" }}>{createdAt}</span>
                    <div className="card-image">
                      <img alt={body} src={photo} />
                    </div>
                    <div className="card-content ">
                      <i
                        style={{
                          color: likes.includes(state._id) ? "#e53935" : "#ccc",
                        }}
                        className="material-icons"
                      >
                        favorite
                      </i>
                      <div style={{ float: "right" }}>
                        {likes.includes(state._id) ? (
                          <i
                            onClick={() => {
                              unLikePost(_id);
                            }}
                            style={{ cursor: "pointer", marginRight: "20px" }}
                            className="material-icons"
                          >
                            thumb_down
                          </i>
                        ) : (
                          <i
                            onClick={() => {
                              likePost(_id);
                            }}
                            style={{ cursor: "pointer", marginRight: "20px" }}
                            className="material-icons"
                          >
                            thumb_up
                          </i>
                        )}
                      </div>
                      <h6>
                        {likes.length === 1
                          ? `${likes.length} Like`
                          : `${likes.length} Likes`}
                      </h6>
                      <h6>{title}</h6>
                      <p>{body}</p>
                      {comments.map((i) => (
                        <h6 key={uuid()}>
                          <span
                            style={{
                              fontWeight: "500",
                              color:
                                i.postedBy._id === id ? "#0d47a1" : "#7b6079",
                            }}
                          >
                            {i.postedBy.name}{" "}
                          </span>
                          {i.text}
                        </h6>
                      ))}
                      <form
                        onSubmit={(e) => {
                          const t = e.target[0].value;
                          comment(e, t, _id);
                        }}
                      >
                        <input type="text" placeholder="Add a Comment" />
                      </form>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
