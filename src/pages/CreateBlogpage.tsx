import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "@/service/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CreateBlogPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    mutation.mutate({
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      content: form.content.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 space-y-4"
    >
      <Input name="title" placeholder="Title" required />
      <Input name="category" placeholder="Category" required />
      <Input name="description" placeholder="Short description" required />
      <Textarea name="content" placeholder="Content" required />
      <Button type="submit">Create Blog</Button>
    </form>
  );
}
