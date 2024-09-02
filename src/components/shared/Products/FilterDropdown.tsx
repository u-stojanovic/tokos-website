import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FilterIcon } from "lucide-react";
import React from "react";

const FilterDropdown: React.FC = () => {
  return (
    <div className="ml-4 relative flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="focus:ring-0 focus:outline-none"
          asChild
        >
          <Button
            variant="outline"
            className="flex items-center gap-2 relative z-10 bg-lightMode-primary text-lightMode-text hover:bg-lightMode-secondary focus:ring-0 focus:outline-none"
          >
            <FilterIcon className="h-4 w-4" />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 z-50 bg-lightMode-background text-lightMode-text dark:bg-darkMode-background dark:text-darkMode-text rounded-lg p-4 shadow-lg"
          sideOffset={4}
        >
          <DropdownMenuLabel className="font-bold">
            Vrste torti:
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="font-raleway text-center">
            <DropdownMenuCheckboxItem className="my-1 px-2 py-1 rounded-md hover:bg-lightMode-surface hover:dark:bg-darkMode-surface hover:dark:text-gray-200 hover:outline-none focus:outline-none hover:cursor-pointer">
              Čokoladne
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="my-1 px-2 py-1 rounded-md hover:bg-lightMode-surface hover:dark:bg-darkMode-surface hover:dark:text-gray-200 hover:outline-none focus:outline-none hover:cursor-pointer">
              Kremaste
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="my-1 px-2 py-1 rounded-md hover:bg-lightMode-surface hover:dark:bg-darkMode-surface hover:dark:text-gray-200 hover:outline-none focus:outline-none hover:cursor-pointer">
              Voćne
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem className="my-1 px-2 py-1 rounded-md hover:bg-lightMode-surface hover:dark:bg-darkMode-surface hover:dark:text-gray-200 hover:outline-none focus:outline-none hover:cursor-pointer">
              Sa filom na pari
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FilterDropdown;
