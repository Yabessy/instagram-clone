import FeedStories from "./FeedStories"
import FeedPost from "./FeedPosts"
import FeedMiniProfile from "./FeedMiniProfile"
import FeedSuggestions from "./FeedSuggestions"
import { useSession } from "next-auth/react"

export default function Feed() {
  const { data: session } = useSession()

  return (
    <main className={`grid ${session ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto" : "grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto"}`}>
      <section className="md:col-span-2">
        {/* Stories */}
        <FeedStories />
        {/* Post */}
        <FeedPost />
      </section>
      <section className="md:col-span-1">
        <div className="fixed w-[380px]">
          {/* Mini Profile */}
          <FeedMiniProfile />
          {/* Suggestions */}
          <FeedSuggestions />
        </div>
      </section>
    </main>
  )
}
