import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TimeZoneChange = () => {
  return (
    <>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Time Zone Changes</h3>
        <Select
          onValueChange={(value) => console.log("Time zone changed to:", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select new time zone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UTC">UTC</SelectItem>
            <SelectItem value="EST">EST</SelectItem>
            <SelectItem value="PST">PST</SelectItem>
            <SelectItem value="CET">CET</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
