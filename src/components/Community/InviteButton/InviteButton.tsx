import React, { useState } from "react"
import { Mail, MessageCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import toast from "react-hot-toast"

type InviteProvider = "email" | "whatsapp"

interface InviteButtonProps {
  onInvite?: (provider: InviteProvider, value: string) => void
}

const InviteButton: React.FC<InviteButtonProps> = ({ onInvite }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState<InviteProvider | null>(null)
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
  // WhatsApp number validation (basic international format)
  const phoneRegex = /^[+]?[1-9]\d{1,14}$/

  const validateInput = (provider: InviteProvider, value: string): boolean => {
    if (!value.trim()) {
      setError(`Please enter a valid ${provider === "email" ? "email address" : "WhatsApp number"}`)
      return false
    }

    if (provider === "email") {
      if (!emailRegex.test(value)) {
        setError("Please enter a valid email address")
        return false
      }
    } else if (provider === "whatsapp") {
      const cleanedNumber = value.replace(/[\s-()]/g, "")
      if (!phoneRegex.test(cleanedNumber)) {
        setError("Please enter a valid WhatsApp number (e.g., +1234567890)")
        return false
      }
    }

    setError("")
    return true
  }

  const handleProviderSelect = (provider: InviteProvider) => {
    setSelectedProvider(provider)
    setInputValue("")
    setError("")
    setIsDialogOpen(true)
  }

  const handleSendInvite = async () => {
    if (!selectedProvider || !validateInput(selectedProvider, inputValue)) {
      return
    }

    setIsLoading(true)
    
    try {
      // Call the optional onInvite callback
      if (onInvite) {
        onInvite(selectedProvider, inputValue)
      }

      setInputValue("")
      setSelectedProvider(null)
      setIsDialogOpen(false)
    } catch (error) {
      console.error("Error sending invite:", error)
      toast.error("Failed to send invitation. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDialogClose = () => {
    setIsDialogOpen(false)
    setInputValue("")
    setSelectedProvider(null)
    setError("")
  }

  const getDialogTitle = () => {
    return selectedProvider === "email" ? "Invite via Email" : "Invite via WhatsApp"
  }

  const getDialogDescription = () => {
    return selectedProvider === "email" 
      ? "Enter the email address of the person you want to invite to this community."
      : "Enter the WhatsApp number of the person you want to invite to this community."
  }

  const getInputPlaceholder = () => {
    return selectedProvider === "email" 
      ? "Enter email address"
      : "Enter WhatsApp number (e.g., +1234567890)"
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="invite" 
            className="rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 focus:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4 mr-2" />
            Invite
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 p-1 flex flex-col gap-1"
          sideOffset={8}
        >
          <DropdownMenuItem 
            onClick={() => handleProviderSelect("email")}
            className="flex items-center gap-3 p-2 cursor-pointer rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="w-8 h-8 rounded-md bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Invite Via Email ID
            </span>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => handleProviderSelect("whatsapp")}
            className="flex items-center gap-3 p-2 cursor-pointer rounded-md transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <div className="w-8 h-8 rounded-md bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Invite Via WhatsApp
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-md p-4">
          <DialogHeader>
            <DialogTitle>{getDialogTitle()}</DialogTitle>
            <DialogDescription>
              {getDialogDescription()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Input
                type={selectedProvider === "email" ? "email" : "tel"}
                placeholder={getInputPlaceholder()}
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value)
                  if (error) setError("")
                }}
                className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
                disabled={isLoading}
              />
              {error && (
                <p className="text-sm text-red-500 dark:text-red-400">
                  {error}
                </p>
              )}
            </div>
          </div>
          
          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
            <Button 
              variant="outline" 
              onClick={handleDialogClose}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSendInvite}
              disabled={isLoading || !inputValue.trim()}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
            >
              {isLoading ? "Sending..." : "Send Invite"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default InviteButton