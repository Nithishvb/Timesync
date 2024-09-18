import { Input } from "@/components/ui/input";
import { ClockIcon } from "lucide-react";

interface ChangeAvailabilityProps {
  availability: number[];
  setAvailability: (val: number[]) => void;
}

export const ChangeAvailability = ({
  availability,
  setAvailability,
}: ChangeAvailabilityProps) => {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold flex items-center">
          <ClockIcon className="mr-2 h-5 w-5" />
          Availability
        </h3>
        <div className="flex items-center space-x-2">
          <Input
            type="time"
            value={`${availability[0].toString().padStart(2, "0")}:00`}
            onChange={(e) =>
              setAvailability([
                parseInt(e.target.value.split(":")[0]),
                availability[1],
              ])
            }
            className="w-26"
          />
          <span>to</span>
          <Input
            type="time"
            value={`${availability[1].toString().padStart(2, "0")}:00`}
            onChange={(e) =>
              setAvailability([
                availability[0],
                parseInt(e.target.value.split(":")[0]),
              ])
            }
            className="w-26"
          />
        </div>
      </div>
    </>
  );
};
