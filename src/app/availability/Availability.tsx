"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { AvailabilitySelector } from "./AvailabilitySelector";
import { AvailabilityDays, TimeZones } from "@/lib/constants";
import { AvailabilityStatus, DayOfWeek } from "@/lib/types";

export const Availability = () => {
  const [timeZone, setTimeZone] = useState("");
  const [availability, setAvailability] =
    useState<AvailabilityStatus>(AvailabilityDays);

  const handleAvailabilityChange = (day: DayOfWeek) => {
    setAvailability((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const autoDetectTimeZone = () => {
    const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(detectedTimeZone);
  };

  const saveAndRedirect = () => {
    console.log("Saving availability:", { timeZone, availability });
    console.log("Redirecting to dashboard...");
  };

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Set Your Availability</CardTitle>
          <CardDescription>
            Configure your time zone and available meeting times
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="timezone">Time Zone</Label>
            <div className="flex space-x-2">
              <Select value={timeZone} onValueChange={setTimeZone}>
                <SelectTrigger className="w-[260px]">
                  <SelectValue placeholder="Select your time zone" />
                </SelectTrigger>
                <SelectContent>
                  {TimeZones.map((tz) => (
                    <SelectItem key={tz} value={tz}>
                      {tz}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={autoDetectTimeZone} variant="outline">
                Auto-detect
              </Button>
            </div>
          </div>
          <AvailabilitySelector
            availability={availability}
            handleAvailabilityChange={handleAvailabilityChange}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={saveAndRedirect} className="w-full">
            <Save className="mr-2 h-4 w-4" /> Save Availability
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};
