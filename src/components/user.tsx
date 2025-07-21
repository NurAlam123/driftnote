"use client";

import { AtSign, LogOutIcon, LucideIcon, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";
import { useEffect, useRef, useState } from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { logout } from "@/actions/logout";
import { useAuthStore } from "@/store/auth-store";
import { getGhost } from "@/actions/getGhost";

const User = ({ user }: { user: SupabaseUser }) => {
  const ghost = useAuthStore((state) => state.ghost);
  const setGhost = useAuthStore((state) => state.setGhost);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (ghost) {
      setLoading(false);
      return;
    }
    setLoading(true);
    getGhost({ email: user.email || "" }).then((res) => {
      if (res.data) {
        setGhost(res.data);
        setLoading(false);
      }
    });
  }, [ghost, setGhost, user.email]);

  return (
    <Sheet>
      {loading ? (
        <p>loading</p>
      ) : (
        <SheetTrigger asChild>
          <Button
            variant="link"
            className="flex items-center gap-0.5 text-primary text-xs md:text-sm"
          >
            <AtSign />
            <span className="hidden md:inline">{ghost?.username}</span>
          </Button>
        </SheetTrigger>
      )}

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Profile</SheetTitle>
          <SheetDescription>Check or edit your profile</SheetDescription>
        </SheetHeader>
        <div className="px-4">
          <div className="flex flex-col items-center gap-4 relative justify-start">
            <User.Input
              label="username"
              value={ghost?.username as string}
              icon={AtSign}
            />
            <User.Input
              label="email"
              value={user.email as string}
              icon={Mail}
            />
          </div>
        </div>
        <SheetFooter>
          <Button
            variant="destructive"
            className="flex items-center"
            onClick={logout}
          >
            Logout <LogOutIcon className="size-4 ml-2" />
          </Button>
        </SheetFooter>
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
