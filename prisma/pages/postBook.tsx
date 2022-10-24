const postBook = () => {
  return (
    <>
      <h1>postBook</h1>

      <form method="POST" action="/api/registerBook">
        <label htmlFor="title">First name:</label>
        <input type="text" id="title" name="title" />

        <button type="button">Submit</button>
      </form>
    </>
  )
}

export default postBook

// https://zenn.dev/tiwu_dev/articles/a7ebe4d36e4b74
