import * as QuizUtil from "../util/quiz_util";

export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';
export const RECEIVE_QUIZZES = "RECEIVE_QUIZZES";
export const REMOVE_QUIZ = "REMOVE_QUIZ"

export const receiveQuiz = quiz => {
  return ({
    type: RECEIVE_QUIZ,
    quiz
  })
}

export const removeQuiz = id => {
  return({
    type: REMOVE_QUIZ,
    id
  })
}

export const receiveQuizzes = quizzes => {
  return({
    type: RECEIVE_QUIZZES,
    quizzes
  })
}

export const createQuiz = quiz => dispatch => (
  QuizUtil.createQuiz(quiz).then(quiz => (dispatch(receiveQuiz(quiz))))
)

export const getQuiz = quiz => dispatch => (
  QuizUtil.getQuiz(quiz).then(quiz => dispatch(receiveQuiz(quiz)))
)

export const getQuizzes = () => dispatch => (
  QuizUtil.getQuizzes()
    .then(quizzes => dispatch(receiveQuizzes(quizzes)))
);
