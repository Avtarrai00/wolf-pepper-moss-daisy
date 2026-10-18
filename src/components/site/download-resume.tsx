import { Download } from "lucide-react";
import { resumePlainText } from "@/lib/site/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DownloadResume({ className, label = "Download résumé" }: { className?: string; label?: string }) {
  return (
    <Button
      className={cn(className)}
      variant="outline"
      onClick={() => {
        const blob = new Blob([resumePlainText()], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "Avtar-Singh-resume.txt";
        anchor.click();
        URL.revokeObjectURL(url);
      }}
    >
      <Download className="size-4" aria-hidden="true" />
      {label}
    </Button>
  );
}
