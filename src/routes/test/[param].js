export function GET ({ params }) {
  return { body: { ssrParams: params }}
}