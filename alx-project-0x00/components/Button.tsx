import type React from "react"
import type { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", styles = "" }) => {
  // Size classes
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

  // Shape classes
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-lg": "rounded-lg",
    "rounded-full": "rounded-full",
  }

  const baseClasses =
    "bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${styles}`

  return <button className={combinedClasses}>{title}</button>
}

export default Button
