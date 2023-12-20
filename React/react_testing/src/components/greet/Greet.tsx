type GreetProp = {
    name?: string
}
export const Greet = (props: GreetProp) => {
  return (
    <div>Hello {props.name}</div>
  )
}
