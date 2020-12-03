var token = $('meta[name=csrf-token]').attr('content');

export const login = user => (
  $.ajax({
    method: "POST",
    url: "api/session",
    data: { user },
    headers: {
      "X-CSRF-Token": token
    }
  })
)

export const signup = user => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: { user },
    headers: {
      "X-CSRF-Token": token
    }
  })
)

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/session",
    headers: {
      "X-CSRF-Token": token
    }
  })
)
