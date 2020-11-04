import React from "react";
import { useDispatch } from "react-redux";
import { createQuestion } from "../actions/question_actions";

export default () => {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  
}