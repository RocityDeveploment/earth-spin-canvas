import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import earthTexture from "@/assets/earth-hq.jpg";

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
        <Card className="glass-card max-w-lg w-full p-8 text-center space-y-6 cosmic-glow animate-slide-up">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-text-glow animate-float tracking-wider">
              ASHNET
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scale-glow"></div>
            <p className="text-xl text-muted-foreground animate-slide-up font-light tracking-wide" style={{ animationDelay: '0.2s' }}>
              Click Below to get redirected
            </p>
          </div>
          
          <div className="pt-6">
            <Button
              variant="cosmic"
              size="lg"
              className="w-full md:w-auto text-lg px-10 py-4 animate-scale-glow font-semibold tracking-wide"
              onClick={() => window.open('https://xa2gkp3eqbbp.connect.remote.it/#/login', '_blank')}
              style={{ animationDelay: '0.4s' }}
            >
              <ExternalLink className="mr-3 h-6 w-6" />
              DASHBOARD CASAOS
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground opacity-80 pt-6 animate-slide-up tracking-widest font-light" style={{ animationDelay: '0.6s' }}>
            ◦ SECURE REMOTE ACCESS PORTAL ◦
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