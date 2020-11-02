export const createQuiz = quiz => (
  $.ajax({
    method: "POST", 
    url: "api/quizzes", 
    data: {quiz}
  })
)

//export const deleteQuiz 
// update 
// getQuiz
// getQuizzes 