import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        size="icon"
        className="w-16 h-16 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full neon-glow animate-float"
        data-testid="button-chat"
      >
        <MessageCircle className="text-white text-xl" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
