import { useRouter } from "next/router"

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div style={{ padding: "20px" }}>
      <h1>Post {id}</h1>
      <p>Das ist ein einfacher Blogpost mit Blitz.</p>
    </div>
  )
}