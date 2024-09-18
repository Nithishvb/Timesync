import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Clock } from "lucide-react";

interface SuggestedTimeProps {
  setSelectedTime: (val: string) => void;
  title: string;
  placeholder: string;
  suggestedTimes: string[]
}

export const SuggestedTime = ({
  setSelectedTime,
  title,
  placeholder,
  suggestedTimes
}: SuggestedTimeProps) => {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Select onValueChange={setSelectedTime}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {suggestedTimes.map((time, index) => (
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
