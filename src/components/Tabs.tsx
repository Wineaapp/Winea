"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

type TabsProps = {
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
};

type TabsListProps = {
  className?: string;
  children: React.ReactNode;
};

type TabsTriggerProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  activeColor?: string;
};

type TabsContentProps = {
  value: string;
  className?: string;
  children: React.ReactNode;
};

const TabsContext = React.createContext<{
  value: string;
  onValueChange: (value: string) => void;
} | null>(null);

function Tabs({ defaultValue, className, children }: TabsProps) {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <TabsContext.Provider value={{ value, onValueChange: setValue }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

function TabsList({ className, children }: TabsListProps) {
  return (
    <div className={cn("flex space-x-1 border-b", className)}>{children}</div>
  );
}

function TabsTrigger({
  value,
  className,
  children,
  disabled = false,
  activeColor,
}: TabsTriggerProps) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsTrigger must be used within a Tabs component");
  }

  const isActive = context.value === value;

  // Custom style for the active border color
  const customStyle =
    isActive && activeColor
      ? { borderBottomColor: activeColor, color: activeColor }
      : {};

  return (
    <button
      type="button"
      role="tab"
      disabled={disabled}
      data-state={isActive ? "active" : "inactive"}
      onClick={() => context.onValueChange(value)}
      style={customStyle}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-all",
        "focus:outline-none",
        isActive
          ? "border-b-2 border-primary text-primary"
          : "text-gray-500 hover:text-gray-700",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}

function TabsContent({ value, className, children }: TabsContentProps) {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("TabsContent must be used within a Tabs component");
  }

  const isActive = context.value === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={cn("mt-4", className)}
    >
      {children}
    </div>
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
