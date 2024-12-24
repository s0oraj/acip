import { Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Question } from "@/types";

interface QuestionDetailsProps {
  question: Question;
}

export const QuestionDetails = ({ question }: QuestionDetailsProps) => (
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
        <div>
          <h4 className="font-semibold text-purple-700 dark:text-purple-300">Key Difference</h4>
          <p className="text-gray-600 dark:text-gray-300">{question.details?.keyDifference}</p>
        </div>
        <div>
          <h4 className="font-semibold text-red-700 dark:text-red-300">Common Error</h4>
          <p className="text-gray-600 dark:text-gray-300">{question.details?.commonError}</p>
        </div>
        <div>
          <h4 className="font-semibold text-green-700 dark:text-green-300">Optimization</h4>
          <p className="text-gray-600 dark:text-gray-300">{question.details?.optimization}</p>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

