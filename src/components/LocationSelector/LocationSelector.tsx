"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocationStore } from "@/store/locationStore";

export const LocationSelector = () => {
  const { location, setLocation } = useLocationStore();

  return (
    <Select
      onValueChange={(value) => {
        setLocation(value);
      }}
      value={location || ""}
    >
      <SelectTrigger className="w-full rounded border-2">
        <SelectValue placeholder="Select a Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="Student Hall-1">Student Hall-1</SelectItem>
          <SelectItem value="Student Hall-2">Student Hall-2</SelectItem>
          <SelectItem value="University Block-A">University Block-A</SelectItem>
          <SelectItem value="University Block-B">University Block-B</SelectItem>
          <SelectItem value="Auditorium">Auditorium</SelectItem>
          <SelectItem value="PlayGround-1">PlayGround-1</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
