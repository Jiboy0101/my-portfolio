import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-light-border bg-light-bg px-3 py-2 text-sm text-light-text placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-text focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-border dark:bg-dark-bg dark:text-dark-text dark:placeholder:text-gray-400 dark:focus-visible:ring-dark-text dark:focus-visible:ring-offset-dark-bg",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }
