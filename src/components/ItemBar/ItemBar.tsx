// ItemBar.tsx
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Leaf, Grip, Cake, ChefHat, Utensils, CupSoda } from "lucide-react";

interface ItemBarProps {
  onValueChange: (value: string) => void;
}

const ItemBar: React.FC<ItemBarProps> = ({ onValueChange }) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-full rounded border-2 bg-white">
        <SelectValue
          placeholder={
            <div className="flex items-center gap-2">
              <Grip />
              <span>All Items</span>
            </div>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="All">
            <Grip />
            All Items
          </SelectItem>
          <SelectItem value="Appetizer">
            <Utensils />
            Appetizer
          </SelectItem>
          <SelectItem value="Main Course">
            <ChefHat />
            Main Course
          </SelectItem>
          <SelectItem value="Salad">
            <Leaf />
            Salad
          </SelectItem>
          <SelectItem value="Desert">
            <Cake />
            Desert
          </SelectItem>
          <SelectItem value="Beverage">
            <CupSoda />
            Beverage
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ItemBar;
