import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import earthTexture from "@/assets/earth-texture.jpg";

const AshnetPortal = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Starfield Background */}
      <div className="stars" />
      
      {/* Animated Earth */}
      <div 
        className="earth-container"
        style={{
          backgroundImage: `url(${earthTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-8">
        <Card className="glass-card max-w-lg w-full p-8 text-center space-y-6 cosmic-glow">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Ashnet
            </h1>
            <p className="text-lg text-muted-foreground">
              Click Below to get redirected
            </p>
          </div>
          
          <div className="pt-4">
            <Button
              variant="cosmic"
              size="lg"
              className="w-full md:w-auto text-lg px-8 py-3"
              onClick={() => window.open('https://xa2gkp3eqbbp.connect.remote.it/#/login', '_blank')}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Dashboard CasaOS
            </Button>
          </div>
          
          <div className="text-xs text-muted-foreground opacity-70 pt-4">
            Secure Remote Access Portal
          </div>
        </Card>
      </div>
      
      {/* Ambient particles */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animation: `twinkle ${4 + Math.random() * 4}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AshnetPortal;