import React, { useEffect, useState, useContext, useRef } from "react";
import { v4 as uuid } from "uuid";
import { UserContext } from "../App";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "materialize-css";

const UserProfile = () => {
  const history = useHistory();
  let follow, unfollow;
  const b = useRef(),
    { state, dispatch } = useContext(UserContext),
    [post, setPost] = useState([]),
    [user, setUser] = useState(""),
    { userid } = useParams();
  const SERVER =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_SERVER
      : process.env.REACT_APP_ONLINE_SERVER;

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      fetch(
        SERVER + `/user/${userid}`,

        {
          headers: {
            Authorization: localStorage.getItem("jwt"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast({
              html: data.error,
              displayLength: 2500,
              classes: "toast-err",
            });
            history.push("/"); //TODO
            return;
          }
          setUser(data.user);
          setPost(data.posts);
          //console.log(data); TODO
        });
    }
  }, []);

  //Follow And Unfollow handels//TODO
  follow = () => {
    b.current.disabled = "true";
    fetch(SERVER + "/follow", {
      method: "put",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        setUser((prev) => {
          return {
            ...prev,
            data,
          };
        });
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        toast({
          html: err,
          displayLength: 1500,
          classes: "toast-err",
        });
      });
  };

  unfollow = () => {
    b.current.disabled = "true";
    fetch(SERVER + "/unfollow", {
      method: "put",
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        dispatch({
          type: "UPDATE",
          payload: { following: data.following, followers: data.followers },
        });
        setUser((prev) => {
          return {
            ...prev,
            data,
          };
        });
      })
      .catch((err) => {
        toast({
          html: err,
          displayLength: 1500,
          classes: "toast-err",
        });
      });
  };

  return (
    <>
      {!user ? (
        <h2 className="center">Loading...</h2>
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
              <button
                ref={b}
                onClick={user.followers.includes(state._id) ? unfollow : follow}
                className=" blue darken-1 btn waves-effect waves-light"
              >
                {user.followers.includes(state._id) ? "Unfollow" : "Follow"}
              </button>

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
                  {user.followers.length === 1
                    ? user.followers.length + " Follower"
                    : user.followers.length + " Followers"}
                </h6>
                <h6>{user.following.length + " Following"}</h6>
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

export default UserProfile;
