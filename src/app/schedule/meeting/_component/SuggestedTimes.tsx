import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";
import { SuggestedTimes } from "@/lib/constants";

interface SuggestedTimeProps {
  setSelectedTime: (val: string) => void;
}

export const SuggestedTime = ({ setSelectedTime }: SuggestedTimeProps) => {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Suggested Times</h3>
        <Select onValueChange={setSelectedTime}>
          <SelectTrigger>
            <SelectValue placeholder="Select a time slot" />
          </SelectTrigger>
          <SelectContent>
            {SuggestedTimes.map((time, index) => (
              <SelectItem key={index} value={time}>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {time}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
