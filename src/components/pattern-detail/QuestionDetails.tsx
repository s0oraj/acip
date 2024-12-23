// src/components/pattern-detail/QuestionDetails.tsx
import { Question } from "@/types";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface QuestionDetailsProps {
  question: Question;
}

export const QuestionDetails = ({ question }: QuestionDetailsProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Info className="w-4 h-4" />
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{question.title}</DialogTitle>
          <DialogDescription>{question.description}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <DetailSection
            title="Key Difference"
            content={question.details?.keyDifference}
            color="purple"
          />
          <DetailSection
            title="Common Error"
            content={question.details?.commonError}
            color="red"
          />
          <DetailSection
            title="Optimization"
            content={question.details?.optimization}
            color="green"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
