"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { GlobeIcon } from "lucide-react";
import { CalendarIntergation } from "./_component/CalendarIntergation";
import { ChangeAvailability } from "./_component/ChangeAvailability";

export default function Settings() {
  const [timeZone, setTimeZone] = useState("UTC");
  const [availability, setAvailability] = useState([9, 17]); // 9 AM to 5 PM
  const [googleCalendarConnected, setGoogleCalendarConnected] = useState(false);
  const [calendlyConnected, setCalendlyConnected] = useState(false);

  const handleSaveSettings = () => {
    console.log("Saving settings:", {
      timeZone,
      availability,
      googleCalendarConnected,
      calendlyConnected,
    });
    console.log("Redirecting to /dashboard");
  };

  const handleConnectGoogleCalendar = () => {
    // Logic to connect Google Calendar
    setGoogleCalendarConnected(true);
  };

  const handleConnectCalendly = () => {
    // Logic to connect Calendly
    setCalendlyConnected(true);
  };

  return (
    <div className="container flex justify-center items-center h-screen">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center">
              <GlobeIcon className="mr-2 h-5 w-5" />
              Time Zone
            </h3>
            <Select value={timeZone} onValueChange={setTimeZone}>
              <SelectTrigger>
                <SelectValue placeholder="Select time zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="UTC">UTC</SelectItem>
                <SelectItem value="EST">EST</SelectItem>
                <SelectItem value="PST">PST</SelectItem>
                <SelectItem value="CET">CET</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ChangeAvailability
            availability={availability}
            setAvailability={setAvailability}
          />

          <CalendarIntergation
            googleCalendarConnected={googleCalendarConnected}
            calendlyConnected={calendlyConnected}
            setCalendlyConnected={setCalendlyConnected}
            setGoogleCalendarConnected={setGoogleCalendarConnected}
            handleConnectCalendly={handleConnectCalendly}
            handleConnectGoogleCalendar={handleConnectGoogleCalendar}
          />
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveSettings} className="w-full">
            Save Settings
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
