import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="flex flex-row-reverse flex-wrap items-center justify-center md:justify-between">
      <CategoryList />
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
