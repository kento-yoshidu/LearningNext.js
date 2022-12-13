interface Test {
  func: Function
  text: string
}

const Button = ({ func, text }: Test) => (
  <button
    className="my-4 bg-gray-200/20 hover:bg-gray-200/50 py-2 px-4 rounded"
    onClick={() => func()}
  >
    {text}
  </button>
)

export default Button
