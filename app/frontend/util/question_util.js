export const createQuestion = quesion => (
  $.ajax({
    method: "POST",
    url: "api/questions",
    data: { quesion }
  })
)

export const updateQuestion = quesion => (
  $.ajax({
    method: "PATCH",
    url: `api/questions/${quesion.id}`,
    data: quesion
  })
)

export const getQuestion = (id) => (
  $.ajax({
    method: "GET",
    url: `api/questions/${id}`
  })
)

export const getQuesestions = (questions) => (
  $.ajax({
    method: "GET",
    url: "api/questions",
    data: questions
  })
)

export const deleteQuestion = (id) => (
  $.ajax({
    method: "DELETE",
    url: `api/questions/${id}`
  })
)