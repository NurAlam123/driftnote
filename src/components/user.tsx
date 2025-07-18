"use client";

import { AtSign, Check, LucideIcon, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

const User = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="link"
          className="flex items-center gap-0.5 text-primary text-xs md:text-sm"
        >
          <AtSign />
          <span className="hidden md:inline">nuralam</span>
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Profile</SheetTitle>
          <SheetDescription>Check or edit your profile</SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <div className="flex flex-col items-center gap-4 relative justify-start">
            <User.Input label="username" value="nuralam" icon={AtSign} />
            <User.Input
              label="email"
              value="nuralam.rsc@gmail.com"
              icon={Mail}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

User.Input = function UserInput({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: LucideIcon;
}) {
  const prev = useRef(value);
  const [newValue, setNewValue] = useState<string>(value);
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className="w-full">
      <Label htmlFor={label} className="mb-1.5 text-neutral-500 font-normal">
        {label}
      </Label>

      <div
        className={cn(
          "flex items-center md:flex-row w-full gap-1 justify-start",
          edit && "flex-col",
        )}
      >
        <div className="relative flex-1">
          {Icon && (
            <Icon className="absolute top-1/2 -translate-y-1/2 ms-1.5 size-3.5 text-muted-foreground" />
          )}
          <Input
            id={label}
            value={newValue}
            className={cn("w-full max-md:text-sm", Icon && "pl-6")}
            onChange={(e) => setNewValue(e.target.value)}
            readOnly={!edit}
          />
        </div>
        <div className={cn("space-x-2", edit && "max-md:w-full")}>
          {!edit ? (
            <Button variant="outline" onClick={() => setEdit(true)}>
              <Pen />
            </Button>
          ) : (
            <div className="flex w-full gap-1">
              <Button
                variant="outline"
                onClick={() => {
                  setNewValue(prev.current);
                  setEdit(false);
                }}
                className={"max-md:flex-1"}
              >
                Cancel
              </Button>
              <Button className="max-md:flex-1">Save</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
