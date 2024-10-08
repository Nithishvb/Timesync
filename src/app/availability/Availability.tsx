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
import { LoadingButton } from "@/components/ui/LoadingButton";
import { useCreateAvailabilityMutation } from "@/store/services/userAvailability";
import { useRouter } from "next/navigation";

export const Availability = () => {
  const [timeZone, setTimeZone] = useState("");
  const [availability, setAvailability] =
    useState<AvailabilityStatus[]>(AvailabilityDays);

  const [createAvailability, { isLoading }] = useCreateAvailabilityMutation();
  const router = useRouter();

  const handleAvailabilityChange = (day: DayOfWeek) => {
    setAvailability((prev) => 
      prev.map((item) => 
        item.day === day 
          ? { ...item, active: !item.active  } 
          : item
      )
    );
  };

  const autoDetectTimeZone = () => {
    const detectedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(detectedTimeZone);
  };

  const handleSaveAvailability = async () => {
    try {
      const selectedAvailability = availability.filter((day) => day.active === true);
      const data = {
        timeZone,
        availability: selectedAvailability,
      };
      await createAvailability(data);
      router.push('/dashboard');
    } catch (err) {
      console.log(err);
    }
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
          <LoadingButton
            onClick={handleSaveAvailability}
            className="w-full"
            loading={isLoading}
          >
            <Save className="mr-2 h-4 w-4" /> Save Availability
          </LoadingButton>
        </CardFooter>
      </Card>
    </>
  );
};
