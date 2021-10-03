import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

function CreatePost() {
  const history = useHistory();
  const b = useRef();
  const preset = process.env.REACT_APP_PRESET;
  const cloudName = process.env.REACT_APP_CLOUDNAME;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const SERVER =
    process.env.NODE_ENV === "development"
      ? process.env.REACT_APP_LOCAL_SERVER
      : process.env.REACT_APP_ONLINE_SERVER;
  useEffect(() => {
    if (url) {
      fetch(SERVER + "/posts/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          photo: url,
          title,
          body,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({
              html: data.error,
              displayLength: 1500,
              classes: "toast-err",
            });
            return;
          } else {
            M.toast({
              html: "Post Created Successfully",
              displayLength: 4500,
              classes: "toast-success",
            });
            history.push("/");
            return;
          }
        })
        .catch((err) => {
          M.toast({
            html: "<strong>Please Try Later</strong>",
            displayLength: 3000,
            classes: "toast-err",
          });
          console.log(`error : ${err}`);
          return;
        });
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", preset);
    data.append("cloud_name", cloudName);

    if (title && image && body) {
      b.current.disabled = "true";
      fetch(
        SERVER + `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            M.toast({
              html: `<strong>${data.error.message}</strong>`,
              displayLength: 2500,
              classes: "toast-err",
            });
            b.current.removeAttribute("disabled");
            return;
          }
          console.log(data);
          setUrl(data.url);
        })
        .catch((err) => {
          b.current.removeAttribute("disabled");
          console.log("err with uploading img :", err);
        });
    } else {
      M.toast({
        html: "<strong>Please Fill All The Fields</strong>",
        displayLength: 1500,
        classes: "toast-err",
      });
      return;
    }
  };

  return (
    <div
      style={{
        margin: "30px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
      className="card input-field"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          postDetails();
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="body"
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn blue darken-1" style={{ display: "flex" }}>
            <i style={{ marginRight: "5px" }} className="material-icons">
              cloud_upload
            </i>
            <span>File</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          ref={b}
          style={{ display: "flex", margin: "0 auto" }}
          className=" blue darken-1 btn waves-effect waves-light"
        >
          <i style={{ marginRight: "5px" }} className="material-icons">
            save
          </i>
          Save
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
