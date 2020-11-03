export const createQuiz = quiz => (
  $.ajax({
    method: "POST", 
    url: "api/quizzes", 
    data: {quiz}
  })
)

export const updateQuiz = quiz => (
  $.ajax({
    method: "PATCH", 
    url: `api/quizzes/${quiz.id}`, 
    data: quiz
  })
)

export const getQuiz = (id) => (
    $.ajax({
    method: "GET",
    url: `api/quizzes/${id}`
  })
)

export const getQuizzes = (quizzes) => (
  $.ajax({
    method: "GET",
    url: "api/quizzes",
    data: quizzes
  })
)

export const deleteQuiz = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/quizzes/${id}`
  })
)

//export const deleteQuiz 
// update 
// getQuiz
// getQuizzes 