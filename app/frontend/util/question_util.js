export const fetchQuestions = (id) => (
  $.ajax({
    method: "GET",
    url: `api/quizzes/${id}/questions`,
  })
)

export const fetchQuizQuestions = (id) => (
  $.ajax({
    method: "GET",
    url: `api/quizzes/${id}/take_quiz`
  })
)

export const fetchQuestion = (id) => (
  $.ajax({
    method: "GET",
    url: `api/questions/${id}`
  })
)


export const createQuestion = question => (
  $.ajax({
    method: "POST",
    url: `api/quizzes/${question.quiz_id}/questions`,
    data: { question }
  })
  )


export const updateQuestion = question => (
  $.ajax({
    method: "PATCH",
    url: `api/quizzes/questions/${question.id}`,
    data: { question }
  })
)

export const deleteQuestion = id => (
  $.ajax({
    method: "DELETE",
    url: `api/quizzes/questions/${id}`
  })
)