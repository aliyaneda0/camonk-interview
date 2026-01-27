import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import  {Blog}  from "@/service/api";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <Card className="hover:shadow-lg transition">
        <CardContent className="p-4 space-y-2">
          <Badge>{blog.category}</Badge>
          <h2 className="text-lg font-semibold">{blog.title}</h2>
          <p className="text-sm text-gray-600">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
