//destructure and set the type of input
const Box = ({ heading }: { heading: string }) => {
  return (
    <div className=" border-2 border-red-500 my-3">
      box content
      <h1>{heading}</h1>
    </div>
  )
}

export default Box
