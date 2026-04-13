import Link from "next/link"

export default function Home() {
  const posts = [
    { id: 1, title: "Mein erster Post" },
    { id: 2, title: "Blitz ist einfach" },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Mein Blog (Blitz)</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}