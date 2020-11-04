import * as QuestionUtil from "../util/question_util";

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION"

export const receiveQuestion = question => {
  return ({
    type: RECEIVE_QUESTION,
    question
  })
}

export const removeQuesion = id => {
  return ({
    type: REMOVE_QUESTION,
    id
  })
}

export const receiveQuestions = questions => {
  return ({
    type: RECEIVE_QUESTIONS,
    questions
  })}

export const createQuestion = question => dispatch => (
  QuestionUtil.createQuesion(question).then(question => (dispatch(receiveQuestion(question))))
)

export const fetchQuestion = question => dispatch => (
  QuestionUtil.getQuestion(question).then(question => dispatch(receiveQuestion(question)))
)