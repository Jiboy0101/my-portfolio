import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-light-text focus:ring-offset-2 dark:focus:ring-dark-text dark:focus:ring-offset-dark-bg",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-light-text text-light-bg hover:bg-light-text/80 dark:bg-dark-text dark:text-dark-bg dark:hover:bg-dark-text/80",
        secondary:
          "border-transparent bg-light-bg-alt text-light-text hover:bg-light-border dark:bg-dark-bg-alt dark:text-dark-text dark:hover:bg-dark-border",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        outline: "text-light-text dark:text-dark-text",
        blue: "border-transparent bg-blue-500/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
        purple: "border-transparent bg-purple-500/20 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
        green: "border-transparent bg-green-500/20 text-green-700 dark:bg-green-500/20 dark:text-green-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
