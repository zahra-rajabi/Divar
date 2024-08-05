import AddPost from "components/templates/AddPost";
import PostList from "components/templates/PostList";

function DashboardPage() {
  return (
    <section>
      <AddPost />
      <PostList />
    </section>
  );
}

export default DashboardPage;
