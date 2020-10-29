import * as QuizUtil from "../util/quiz_util";

export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';

export const receiveQuiz = quiz => {
  return ({
    type: RECEIVE_QUIZ,
    quiz
  })
}

export const createQuiz = quiz => dispatch => (
  QuizUtil.createQuiz(quiz).then(quiz => (dispatch(receiveQuiz(quiz))))
)