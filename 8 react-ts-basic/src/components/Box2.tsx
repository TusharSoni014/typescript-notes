
type TextData = {
  heading: string,
  color: string,
  count: number,
  func?: () => void,
}

export default function Box2({ heading, color, count }: TextData) {
  return (
    <div className=" border-2 border-red-500 my-3">
      <p>
        heading: {heading}
      </p>
      <p>
        color: {color}
      </p>
      <p>
        count: {count}
      </p>
    </div>
  )
}
