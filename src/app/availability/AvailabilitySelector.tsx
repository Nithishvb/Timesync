import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AvailabilityStatus, DayOfWeek } from "@/lib/types";

interface AvailabilitySelectorProps {
  availability: AvailabilityStatus;
  handleAvailabilityChange: (val: DayOfWeek) => void;
}

export const AvailabilitySelector = ({
  availability,
  handleAvailabilityChange,
}: AvailabilitySelectorProps) => {
  return (
    <>
      <div className="space-y-2">
        <Label>Availability</Label>
        <Card>
          <CardContent className="p-4 grid gap-4">
            {Object.entries(availability).map(([day, isAvailable]) => (
              <div key={day} className="flex items-center justify-between">
                <Label htmlFor={day} className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{day}</span>
                </Label>
                <Switch
                  id={day}
                  checked={isAvailable}
                  onCheckedChange={() =>
                    handleAvailabilityChange(day as DayOfWeek)
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
