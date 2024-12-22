import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface PatternCardProps {
  id: number;
  title: string;
  description: string;
}

export function PatternCard({ id, title, description }: PatternCardProps) {
  return (
    <Link to={`/pattern/${id}`}>
      <Card className="pattern-card text-white h-full cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <CardDescription className="text-gray-100 mt-2">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}