import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import { statsModalContainer } from "../styles/modals";
import { iconContainerStyle } from "../styles/signInUp";
import { iconStyle } from "../styles/signInUp";
import { inputStyle } from "../styles/signInUp";
import { buttonStyle } from "../styles/signInUp";
import LockIcon from "@material-ui/icons/Lock";

import { Context } from "../context/Context";

//-------------MAIN FUNC------------
export default function DeleteAccount({ open, setOpen }) {
  const [returnData, setReturnData] = useState([]);
  const { setToken, setUserId } = useContext(Context);
  const history = useHistory();
  const inputRef = useRef();

  const handleAccountDelete = async () => {
    try {
      console.log(inputRef?.current?.value);
      console.log(localStorage.getItem("token"));
      const result = await axios.post(
        `http://127.0.0.1:8000/user/edit/`,
        { password: inputRef?.current?.value },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Token " + localStorage.getItem("token"),
          },
        }
      );
      setReturnData(result);
      console.log(result);
    } catch ({ response }) {
      if (response) {
        alert(
          response?.status == 404 || response?.status == 400
            ? "Please enter valid password!"
            : response?.data?.message
        );
      } else {
        console.log("Something went wrong!");
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div
      style={{
        ...statsModalContainer,
        minHeight: "14rem",
        height: "14rem",
      }}
    >
      <p
        style={{
          fontSize: "0.9rem",
          textAlign: "center",
          color: "tomato",
          fontWeight: "bold",
        }}
      >
        😮 Sure to delete account?
        <br /> All your posts will be deleted as well!
      </p>

      <div style={iconContainerStyle}>
        <div style={iconStyle}>
          <LockIcon fontSize="small" />
        </div>

        <input
          style={inputStyle}
          ref={inputRef}
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>

      <div
        style={{
          height: "5rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{ ...buttonStyle, width: "8rem" }}
          onClick={handleAccountDelete}
        >
          Yes
        </button>
        <button
          style={{
            ...buttonStyle,
            width: "8rem",
            marginLeft: "12px",
            backgroundColor: "hsl(34, 80%, 73%)",
          }}
          onClick={() => setOpen(false)}
        >
          No
        </button>
      </div>
    </div>
  );

  const confirmed = (
    <div className="itemContainer">
      <div
        style={{
          backgroundColor: "#ecf0f1",
          marginBottom: "12px",
          padding: "1rem",
          borderRadius: "6px",
          display: "flex",
          flexFlow: "column",
          boxShadow: "2px 2px 5px #636e72",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "0.9rem", textAlign: "center" }}>
            Your account permanently deleted.
          </p>
        </div>
        <button
          className="btn"
          onClick={() => {
            handleClose();
            setToken(null);
            setUserId(null);
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            history.push("/");
          }}
        >
          Ok
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {returnData.status == 204 ? confirmed : body}
      </Modal>
    </div>
  );
}