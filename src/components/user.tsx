"use client";

import {
  AtSign,
  GhostIcon,
  LogOutIcon,
  LucideIcon,
  Mail,
  Pen,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useRef, useState } from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";
import { User as SupabaseUser } from "@supabase/supabase-js";
import { logout } from "@/actions/logout";
import { useAuthStore } from "@/store/auth-store";
import { getGhost } from "@/actions/getGhost";
import { Skeleton } from "./ui/skeleton";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const User = ({ user }: { user: SupabaseUser }) => {
  const ghost = useAuthStore((state) => state.ghost);
  const setGhost = useAuthStore((state) => state.setGhost);
  const removeGhost = useAuthStore((state) => state.removeGhost);

  const pathname = usePathname();

  const [loading, setLoading] = useState<boolean>(true);

  const onLogout = async () => {
    const res = await logout(pathname);
    if (!res) return;
    if (!res.success) return;
    removeGhost();
    window.location.reload();
  };

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
    <DropdownMenu>
      {loading ? (
        <User.Skeleton />
      ) : (
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className="flex items-center gap-0.5 text-primary text-xs md:text-sm"
          >
            <AtSign />
            <span className="hidden md:inline">{ghost?.username}</span>
          </Button>
        </DropdownMenuTrigger>
      )}

      <DropdownMenuContent className="px-4 py-6 space-y-4 -translate-x-1">
        <div>
          <div className="flex flex-col items-center gap-2 relative justify-start">
            <User.Input
              label="username"
              value={ghost?.username as string}
              icon={AtSign}
              showcase
            />
            <User.Input
              label="email"
              value={user.email as string}
              icon={Mail}
              showcase
            />
          </div>
        </div>
        <div className="space-y-2">
          <Button className="w-full" variant="outline">
            <Link
              href="/profile"
              className="flex items-center justify-center gap-4"
            >
              Profile <GhostIcon />
            </Link>
          </Button>
          <Button
            variant="destructive"
            onClick={onLogout}
            className="flex items-center w-full"
          >
            Logout <LogOutIcon className="size-4 ml-2" />
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

User.Input = function UserInput({
  label,
  value,
  icon: Icon,
  showcase,
}: {
  label: string;
  value: string;
  icon?: LucideIcon;
  showcase?: boolean;
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
            className={cn("w-full max-md:text-xs", Icon && "pl-6")}
            onChange={(e) => setNewValue(e.target.value)}
            readOnly={!edit}
          />
        </div>
        {!showcase && (
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
        )}
      </div>
    </div>
  );
};

User.Skeleton = function UserSkeleton() {
  return <Skeleton className="w-30 h-6" />;
};

export default User;
