import { useState } from 'react';
import { ChevronDown, Image, X } from 'lucide-react';

interface Finding {
  title: string;
  points: string[];
}

interface ImageData {
  src: string;
  alt: string;
}

interface ResearchPhaseCardProps {
  title: string;
  description: string;
  findings?: Finding[];
  takeaways?: string[];
  images?: ImageData[];
  onImageClick?: (src: string) => void;
  className?: string;
  children?: React.ReactNode;
}

export function ResearchPhaseCard({
  title,
  description,
  findings,
  takeaways,
  images = [],
  onImageClick,
  className = '',
  children,
}: ResearchPhaseCardProps) {
  const [showAllImages, setShowAllImages] = useState(false);

  return (
    <div className={`grid lg:grid-cols-[1fr_280px] gap-6 ${className}`}>
      {/* Left: Main Content */}
      <div className="space-y-4">
        <div>
          <h4 className="font-serif text-lg mb-2">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Findings */}
        {findings && findings.length > 0 && (
          <div className="space-y-4">
            {findings.map((finding, i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/20 border border-border/50">
                <h5 className="text-sm font-semibold mb-2">{finding.title}</h5>
                <ul className="space-y-1.5">
                  {finding.points.map((point, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-primary shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Takeaways */}
        {takeaways && takeaways.length > 0 && (
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h5 className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Key Takeaways</h5>
            <ul className="space-y-1.5">
              {takeaways.map((takeaway, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">→</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Custom children content */}
        {children}
      </div>

      {/* Right: Image Preview Card */}
      {images.length > 0 && (
        <div className="lg:sticky lg:top-6 h-fit">
          <div 
            className="group bg-card border border-border rounded-lg p-3 cursor-pointer hover:border-primary/40 transition-all"
            onClick={() => setShowAllImages(!showAllImages)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-muted-foreground">
                {images.length} {images.length === 1 ? 'image' : 'images'} attached
              </span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showAllImages ? 'rotate-180' : ''}`} />
            </div>
            
            {/* Preview thumbnails */}
            <div className="flex gap-2 overflow-hidden">
              {images.slice(0, 3).map((img, i) => (
                <div key={i} className="w-16 h-12 rounded overflow-hidden border border-border flex-shrink-0">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
              ))}
              {images.length > 3 && (
                <div className="w-16 h-12 rounded bg-muted/50 border border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] text-muted-foreground">+{images.length - 3}</span>
                </div>
              )}
            </div>
          </div>

          {/* Expanded images */}
          {showAllImages && (
            <div className="mt-3 space-y-2 animate-fade-in">
              {images.map((img, i) => (
                <div 
                  key={i} 
                  className="rounded-lg border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                  onClick={(e) => {
                    e.stopPropagation();
                    onImageClick?.(img.src);
                  }}
                >
                  <img src={img.src} alt={img.alt} className="w-full object-contain" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Platform Audit Phase Card
interface PlatformAuditPhaseProps {
  phase: string;
  title: string;
  severity: 'high' | 'medium' | 'low';
  description: string;
  taskGoal: string;
  actorsInvolved: string;
  issues: string[];
  businessImpact: string[];
  recommendations: string[];
  platformFindings?: {
    number: number;
    title: string;
    description: string;
    recommendations: string[];
  }[];
  images?: ImageData[];
  onImageClick?: (src: string) => void;
}

export function PlatformAuditPhase({
  phase,
  title,
  severity,
  description,
  taskGoal,
  actorsInvolved,
  issues,
  businessImpact,
  recommendations,
  platformFindings,
  images = [],
  onImageClick,
}: PlatformAuditPhaseProps) {
  const [showFindings, setShowFindings] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

  const severityColors = {
    high: 'text-destructive',
    medium: 'text-amber-600',
    low: 'text-muted-foreground',
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-background">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-muted/30 to-muted/10 border-b border-border">
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs font-medium ${severityColors[severity]}`}>⚠ Severity - {severity.charAt(0).toUpperCase() + severity.slice(1)}</span>
        </div>
        <h3 className="font-serif text-2xl mb-3">{phase}: {title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2 text-sm">
          <p><span className="font-medium text-foreground">Task Goal</span> — {taskGoal}</p>
          <p><span className="font-medium text-foreground">Actors Involved</span> — {actorsInvolved}</p>
        </div>
      </div>

      {/* Issues, Impact, Recommendations Grid */}
      <div className="grid md:grid-cols-3 gap-0 border-b border-border">
        {/* Issues */}
        <div className="p-5 border-r border-border md:border-r-0 md:border-b-0">
          <h4 className="font-semibold mb-3 text-sm">Issue</h4>
          <ul className="space-y-2">
            {issues.map((issue, i) => (
              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                <span className="text-muted-foreground/60">•</span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Business Impact */}
        <div className="p-5 bg-primary/10 text-primary-foreground md:border-x border-primary/20">
          <h4 className="font-semibold mb-3 text-sm text-primary">Business Impact</h4>
          <ul className="space-y-2">
            {businessImpact.map((impact, i) => (
              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                <span className="text-primary/60">•</span>
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommendations */}
        <div className="p-5 border-l border-border md:border-l-0">
          <h4 className="font-semibold mb-3 text-sm text-primary">Recommendation</h4>
          <ul className="space-y-2">
            {recommendations.map((rec, i) => (
              <li key={i} className="text-xs text-muted-foreground flex gap-2">
                <span className="text-primary/60">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Platform Findings - Collapsible */}
      {platformFindings && platformFindings.length > 0 && (
        <div className="border-b border-border">
          <button
            onClick={() => setShowFindings(!showFindings)}
            className="w-full p-4 flex items-center justify-between hover:bg-muted/20 transition-colors"
          >
            <span className="text-sm font-medium">Platform Audit Findings ({platformFindings.length})</span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${showFindings ? 'rotate-180' : ''}`} />
          </button>
          
          {showFindings && (
            <div className="p-4 pt-0 space-y-6 animate-fade-in">
              <div className="grid lg:grid-cols-[1fr_200px] gap-4">
                <div className="space-y-4">
                  {platformFindings.map((finding, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted/10 border border-border/50">
                      <h5 className="text-sm font-medium mb-2">
                        <span className="text-primary/70">#{finding.number}</span> {finding.title}
                      </h5>
                      <p className="text-xs text-muted-foreground mb-3">{finding.description}</p>
                      <div className="p-3 rounded bg-primary/5 border border-primary/20">
                        <span className="text-xs font-medium text-primary">Recommendation</span>
                        <ul className="mt-1.5 space-y-1">
                          {finding.recommendations.map((rec, j) => (
                            <li key={j} className="text-xs text-muted-foreground flex gap-2">
                              <span className="text-primary/60">•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Images sidebar */}
                {images.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-xs text-muted-foreground">{images.length} screenshots</span>
                    <div className="space-y-2">
                      {images.slice(0, showAllImages ? images.length : 2).map((img, i) => (
                        <div 
                          key={i} 
                          className="rounded border border-border overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => onImageClick?.(img.src)}
                        >
                          <img src={img.src} alt={img.alt} className="w-full object-cover" />
                        </div>
                      ))}
                      {images.length > 2 && !showAllImages && (
                        <button 
                          onClick={() => setShowAllImages(true)}
                          className="text-xs text-primary hover:underline"
                        >
                          +{images.length - 2} more
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
