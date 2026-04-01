import { employees } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const statusConfig = {
  onboarding: { label: "Onboarding", className: "bg-info/10 text-info border-info/20" },
  ativo: { label: "Ativo", className: "bg-success/10 text-success border-success/20" },
  férias: { label: "Férias", className: "bg-warning/10 text-warning border-warning/20" },
};

export default function Employees() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Gestão de Colaboradores</h1>
        <p className="text-muted-foreground">Equipe ativa e seus status</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp) => {
          const status = statusConfig[emp.status];
          return (
            <Card key={emp.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {emp.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold truncate">{emp.name}</h3>
                      <Badge variant="outline" className={status.className}>
                        {status.label}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{emp.role}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{emp.department}</p>

                    <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{emp.email}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{emp.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {emp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
