import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CalendarIntergationProps {
  googleCalendarConnected: boolean;
  calendlyConnected: boolean;
  setGoogleCalendarConnected: (val: boolean) => void;
  setCalendlyConnected: (val: boolean) => void;
  handleConnectGoogleCalendar: () => void;
  handleConnectCalendly: () => void;
}

export const CalendarIntergation = ({
  googleCalendarConnected,
  calendlyConnected,
  handleConnectCalendly,
  handleConnectGoogleCalendar,
  setCalendlyConnected,
  setGoogleCalendarConnected,
}: CalendarIntergationProps) => {
  return (
    <>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center">
          <CalendarIcon className="mr-2 h-5 w-5" />
          Integrations
        </h3>
        <div className="flex items-center justify-between">
          <Label htmlFor="google-calendar">Google Calendar</Label>
          {googleCalendarConnected ? (
            <Switch
              id="google-calendar"
              checked={googleCalendarConnected}
              onCheckedChange={setGoogleCalendarConnected}
            />
          ) : (
            <Button
              onClick={handleConnectGoogleCalendar}
              variant="outline"
              size="sm"
            >
              Connect
            </Button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="calendly">Calendly</Label>
          {calendlyConnected ? (
            <Switch
              id="calendly"
              checked={calendlyConnected}
              onCheckedChange={setCalendlyConnected}
            />
          ) : (
            <Button onClick={handleConnectCalendly} variant="outline" size="sm">
              Connect
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
