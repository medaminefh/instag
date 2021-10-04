import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Profile = () => {
  const abort = new AbortController();
  const s = abort.signal;
  const SERVER =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_SERVER
      : process.env.REACT_APP_ONLINE_SERVER;
  const [post, setPost] = useState([]);
  const [user, setUser] = useState("");
  useEffect(() => {
    //fetch profile
    if (localStorage.getItem("jwt")) {
      fetch(SERVER + "/profile", {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      })
        .then((data) => data.json())
        .then((d) => {
          setUser(d);
        })
        .catch((err) => console.log(err));

      //fetch posts
      fetch(
        SERVER + "/posts/myposts",

        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        },
        { signal: s }
      )
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
        });
    }
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  //console.log("user", user);
  //TODO;

  return (
    <>
      {!user.followers || !user.following ? (
        <h1 className="center">Loading...</h1>
      ) : (
        <div style={{ maxWidth: "550px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0px",
              borderBottom: "1px solid #777",
            }}
          >
            <div>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1578635073855-a89b3dd5cc18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
              />
            </div>
            <div>
              <h4>{user.name}</h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h6>
                  {post.length > 1
                    ? post.length + " Photos"
                    : post.length + " Photo"}
                </h6>
                <h6>
                  {!user.followers.length === 1
                    ? user.followers.length + " Followers"
                    : user.followers.length + " Follower"}
                </h6>
                <h6>
                  {user.following.length > 1
                    ? user.following.length + " Following"
                    : user.following.length + " Following"}
                </h6>
              </div>
            </div>
          </div>
          {post.length === 0 ? (
            <h2 className="center">No Posts Found</h2>
          ) : (
            <div className="gallery">
              {post.map((i) => (
                <img
                  key={uuid()}
                  className="item"
                  alt={i.title}
                  src={i.photo}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
