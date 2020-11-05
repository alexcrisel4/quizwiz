import * as QuestionUtil from '../util/question_util';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION"

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions
})

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION, 
  question
})


export const removeQuestion = id => ({
  type: REMOVE_QUESTION,
  id
})


export const getQuestions = (quizID) => dispatch => (
  QuestionUtil.fetchQuestions(quizID).then(questions => dispatch(receiveQuestions(questions)))
)


export const createQuestion = (question) => dispatch => (
  QuestionUtil.createQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const updateQuestion = (question) => dispatch => (
  QuestionUtil.updateQuestion(question).then(question => dispatch(receiveQuestion(question)))
)

export const deleteQuestion = (id) => dispatch => (
  QuestionUtil.deleteQuestion(id).then(question => dispatch(removeQuestion(question)))
)