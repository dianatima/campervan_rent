import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import {
  FormWrap,
  FormTitle,
  FormInfo,
  BlockWrap,
  FormBlock,
  FormInput,
  FormTextInput,
  CalendarIcon,
  SendBtn,
  ErrorWrap,
  ErrorMsg,
} from "./BookForm.styled";

export const BookForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bookDate, setBookDate] = useState(new Date());
  const [comment, setComment] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [bookDateDirty, setBookDateDirty] = useState(false);
  const [commentDirty, setCommentDirty] = useState(false);
  const [nameError, setNameError] = useState("Name cannot be empty");
  const [emailError, setEmailError] = useState("Email cannot be empty");
  const [bookDateError, setBookDateError] = useState(
    "Booking date cannot be empty"
  );
  const [commentError, setCommentError] = useState("Comment cannot be empty");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || bookDateError || commentError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, bookDateError, commentError]);

  const handleName = (e) => {
    setName(e.target.value);
    if (
      e.target.value.length < 2 ||
      e.target.value.length > 9 ||
      !e.target.value
    ) {
      setNameError("Name must contain more than 1 and less than 10 letters");
    } else {
      setNameError("");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!e.target.value.match(re)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleDate = (date) => {
    setBookDate(date);
    if (date > new Date()) {
      setBookDateError(
        `The date cannot be older than "${new Date().toDateString()}"`
      );
    } else {
      setBookDateError("");
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
    if (e.target.value.length < 2 || !e.target.value) {
      setCommentError("Comment must contain more than 1 letter");
    } else {
      setCommentError("");
    }
  };

  const blurHandle = (e) => {
    switch (e.target.name) {
      case `name`:
        setNameDirty(true);
        break;
      case `email`:
        setEmailDirty(true);
        break;
      case `date`:
        setBookDateDirty(true);
        break;
      case `comment`:
        setCommentDirty(true);
        break;
    }
  };

  return (
    <>
      <FormWrap>
        <BlockWrap>
          <FormTitle>Book your campervan now</FormTitle>
          <FormInfo>Stay connected! We are always ready to help you.</FormInfo>
        </BlockWrap>
        <FormBlock>
          <ErrorWrap>
            <FormInput
              type="text"
              onBlur={(e) => blurHandle(e)}
              onChange={(e) => handleName(e)}
              value={name}
              name="name"
              placeholder="Name"
            ></FormInput>
            <ErrorMsg>
              {nameDirty && nameError && <div>{nameError}</div>}
            </ErrorMsg>
          </ErrorWrap>
          <ErrorWrap>
            <FormInput
              type="text"
              required
              value={email}
              onBlur={(e) => blurHandle(e)}
              onChange={(e) => handleEmail(e)}
              name="email"
              placeholder="Email"
            ></FormInput>
            <ErrorMsg>
              {emailDirty && emailError && <div>{emailError}</div>}
            </ErrorMsg>
          </ErrorWrap>
          <ErrorWrap>
            <DatePicker
              className="date-input"
              selected={bookDate}
              onBlur={(e) => blurHandle(e)}
              onChange={(date) => handleDate(date)}
              placeholder="Booking date"
              name="date"
            />
            <CalendarIcon />
            <ErrorMsg>
              {bookDateDirty && bookDateError && <div>{bookDateError}</div>}
            </ErrorMsg>
          </ErrorWrap>
          <ErrorWrap>
            <FormTextInput
              type="text"
              required
              onBlur={(e) => blurHandle(e)}
              onChange={(e) => handleComment(e)}
              value={comment}
              name="comment"
              placeholder="Comment"
            />
            <ErrorMsg>
              {commentDirty && commentError && <div>{commentError}</div>}
            </ErrorMsg>
          </ErrorWrap>
        </FormBlock>
        <BlockWrap>
          <SendBtn disabled={!formValid} type="submit">
            Send
          </SendBtn>
        </BlockWrap>
      </FormWrap>
    </>
  );
};
