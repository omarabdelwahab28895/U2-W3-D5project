fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
  headers: {
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MWI0NThhZDEyOTAwMTU4NzZjMDgiLCJpYXQiOjE3MzE2Njc0NjUsImV4cCI6MTczMjg3NzA2NX0.fmQKOmq8n9dSwT_OaZlaFOJaYjgYD2yN9QbAPWhyl4o"
  }
  })
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Errore:", error));

