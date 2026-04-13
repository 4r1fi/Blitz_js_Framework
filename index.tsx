import Link from "next/link"

const posts = [
  { id: 1, title: "Mein erster Post", category: "Pages", description: "Beispiel für eine dynamische Detailseite mit Route-Parameter." },
  { id: 2, title: "Blitz ist einfach", category: "Fullstack", description: "Zeigt, dass Blitz auf einfacher Struktur und schneller Entwicklung basiert." },
]

const structureItems = [
  {
    title: "Pages / Routing",
    text: "Blitz nutzt dateibasiertes Routing. Jede Datei in den Pages wird automatisch zu einer Route.",
  },
  {
    title: "Komponenten",
    text: "Wiederverwendbare UI-Teile können als Komponenten aufgebaut werden.",
  },
  {
    title: "Fullstack Ansatz",
    text: "Frontend und Backend sind in einem Projekt organisiert, was die Entwicklung vereinfacht.",
  },
  {
    title: "Klare Projektstruktur",
    text: "Blitz ist gut geeignet, um schnell kleine bis mittlere Projekte umzusetzen.",
  },
]

export default function Home() {
  return (
    <main
      style={{
        padding: "32px",
        maxWidth: "960px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <section style={{ marginBottom: "32px" }}>
        <p style={{ margin: 0, fontSize: "14px" }}>Modul 241 · Framework Vergleich</p>
        <h1 style={{ marginBottom: "12px" }}>Blitz.js – Struktur eines einfachen Blog-Projekts</h1>
        <p>
          Diese Demo zeigt möglichst klar, wie ein Blitz-Projekt aufgebaut sein kann:
          mit Routing, wiederverwendbarer Struktur und einer einfachen Fullstack-Idee.
        </p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2>Was diese Startseite zeigt</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}
        >
          {structureItems.map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "12px",
                padding: "16px",
                background: "#f8fafc",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{item.title}</h3>
              <p style={{ marginBottom: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2>Beispiel: Blogposts</h2>
        <p>
          Die folgende Liste simuliert Inhalte. Beim Klick auf einen Beitrag gelangt man auf eine
          dynamische Detailseite, zum Beispiel <code>/posts/1</code>.
        </p>

        <div style={{ display: "grid", gap: "12px" }}>
          {posts.map((post) => (
            <article
              key={post.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "16px",
              }}
            >
              <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>
                <strong>Kategorie:</strong> {post.category}
              </p>
              <h3 style={{ margin: "0 0 8px 0" }}>{post.title}</h3>
              <p style={{ marginTop: 0 }}>{post.description}</p>
              <Link href={`/posts/${post.id}`}>Zum Beitrag</Link>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Warum diese Struktur sinnvoll ist</h2>
        <ul>
          <li>Einfacher Einstieg für kleine Projekte</li>
          <li>Klare Trennung von Startseite und Detailseiten</li>
          <li>Gute Grundlage, um später Datenbank oder Login zu ergänzen</li>
          <li>Gut verständlich für eine Schul-Demo</li>
        </ul>
      </section>
    </main>
  )
}