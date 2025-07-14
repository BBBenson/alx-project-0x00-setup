import type React from "react"
import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-extralight mb-8">Landing Page</h1>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold">Button Components</h2>


        <div className="space-y-4">
          <h3 className="text-lg font-medium">Small Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button title="Small Rounded SM" size="small" shape="rounded-sm" />
            <Button title="Small Rounded MD" size="small" shape="rounded-md" />
            <Button title="Small Rounded Full" size="small" shape="rounded-full" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Medium Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button title="Medium Rounded SM" size="medium" shape="rounded-sm" />
            <Button title="Medium Rounded MD" size="medium" shape="rounded-md" />
            <Button title="Medium Rounded Full" size="medium" shape="rounded-full" />
          </div>
        </div>

        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Large Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button title="Large Rounded SM" size="large" shape="rounded-sm" />
            <Button title="Large Rounded MD" size="large" shape="rounded-md" />
            <Button title="Large Rounded Full" size="large" shape="rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
