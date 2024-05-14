import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Form = ({ isColTwo }) => {
  return (
    <div className="replay__box cmn__bg">
      <h3>Leave a Reply</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form
        action="https://formspree.io/f/xjvnzogg"
        className="row g-4"
        method="POST"
      >
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            name="Name"
            type="text"
            placeholder="Name"
            required
            autoComplete="off"
          />
        </div>
        <div className={` ${isColTwo ? "col-lg-6" : "col-lg-12"}`}>
          <input
            name="Email"
            type="email"
            placeholder="Email"
            required
            autoComplete="off"
          />
        </div>
        <div className="col-lg-12">
          <textarea
            name="comment"
            rows="5"
            placeholder="Write Comments"
            required
            autoComplete="off"
          ></textarea>
        </div>
        <button
          className="d-flex fw-500 cmn--btn align-items-center gap-2"
          type="submit"
        >
          <span className="get__text">Submit Comment</span>
          <span>
            <i className=" fz-20">
              {" "}
              <ArrowRight />{" "}
            </i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
