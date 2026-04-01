import { useState } from "react";
import { candidates as initialCandidates, type Candidate } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Phone, MapPin, DollarSign, Clock } from "lucide-react";

const stages = [
  { key: "triagem", label: "Triagem", color: "bg-info/10 text-info" },
  { key: "entrevista", label: "Entrevista Técnica", color: "bg-warning/10 text-warning" },
  { key: "fit-cultural", label: "Fit Cultural", color: "bg-primary/10 text-primary" },
  { key: "proposta", label: "Proposta", color: "bg-success/10 text-success" },
  { key: "contratado", label: "Contratado", color: "bg-success/20 text-success" },
] as const;

function ScoreBadge({ score }: { score: number }) {
  const variant = score >= 90 ? "default" : score >= 80 ? "secondary" : "outline";
  return <Badge variant={variant} className="text-xs">{score}%</Badge>;
}

export default function Recruitment() {
  const [candidatesList, setCandidatesList] = useState<Candidate[]>(initialCandidates);
  const [selected, setSelected] = useState<Candidate | null>(null);
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const handleDragStart = (id: string) => setDraggedId(id);

  const handleDrop = (stage: Candidate["stage"]) => {
    if (!draggedId) return;
    setCandidatesList((prev) =>
      prev.map((c) => (c.id === draggedId ? { ...c, stage } : c))
    );
    setDraggedId(null);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Pipeline de Recrutamento</h1>
        <p className="text-muted-foreground">Arraste os candidatos entre as etapas</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageCandidates = candidatesList.filter((c) => c.stage === stage.key);
          return (
            <div
              key={stage.key}
              className="kanban-column min-w-[260px] flex-1"
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(stage.key as Candidate["stage"])}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold">{stage.label}</h3>
                <Badge variant="secondary" className="text-xs">
                  {stageCandidates.length}
                </Badge>
              </div>
              <div className="space-y-2">
                {stageCandidates.map((candidate) => (
                  <Card
                    key={candidate.id}
                    draggable
                    onDragStart={() => handleDragStart(candidate.id)}
                    onClick={() => setSelected(candidate)}
                    className="cursor-pointer hover:shadow-md transition-shadow border-border/50"
                  >
                    <CardContent className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                          {candidate.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{candidate.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{candidate.role}</p>
                        </div>
                        <ScoreBadge score={candidate.score} />
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {candidate.skills.slice(0, 2).map((skill) => (
                          <span key={skill} className="text-[10px] px-1.5 py-0.5 rounded-md bg-accent text-accent-foreground">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-md">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    {selected.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p>{selected.name}</p>
                    <p className="text-sm font-normal text-muted-foreground">{selected.role}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-2">
                  <ScoreBadge score={selected.score} />
                  <Badge variant="outline">{stages.find((s) => s.key === selected.stage)?.label}</Badge>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" /> {selected.email}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" /> {selected.phone}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {selected.location}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" /> {selected.salaryExpectation}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2">
                    <Clock className="h-4 w-4" /> {selected.experience} de experiência
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Competências</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
