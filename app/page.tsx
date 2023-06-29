import getCurrentUser from "./actions/getCurrentUser";
import getPosts from "./actions/getPosts";
import EmptyState from "./components/EmptyState";
import HeadingPosts from "./components/HeadingPosts";
import Hero from "./components/Hero";

export default async function Home() {
  const posts = await getPosts();
  const currentUser = await getCurrentUser();

  if (posts.length === 0) {
    return (
      <EmptyState />
    )
  }

  return (
    <div>
      <Hero />
      <HeadingPosts title="Leopico Blog & Tricks" posts={posts} currentUser={currentUser} />
    </div>
  )
}
