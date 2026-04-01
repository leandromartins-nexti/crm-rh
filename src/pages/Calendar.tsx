import { calendarEvents } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";

const typeConfig = {
  entrevista: { label: "Entrevista", variant: "default" as const },
  feedback: { label: "Feedback 1:1", variant: "secondary" as const },
  reunião: { label: "Reunião", variant: "outline" as const },
};

const groupByDate = (events: typeof calendarEvents) => {
  const groups: Record<string, typeof calendarEvents> = {};
  events.forEach((e) => {
    if (!groups[e.date]) groups[e.date] = [];
    groups[e.date].push(e);
  });
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
};

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
}

export default function Calendar() {
  const grouped = groupByDate(calendarEvents);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Calendário de RH</h1>
        <p className="text-muted-foreground">Entrevistas agendadas e reuniões de feedback</p>
      </div>

      <div className="space-y-6 max-w-2xl">
        {grouped.map(([date, events]) => (
          <div key={date}>
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold capitalize">{formatDate(date)}</h2>
            </div>
            <div className="space-y-2">
              {events.map((event) => {
                const config = typeConfig[event.type];
                return (
                  <Card key={event.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground w-16 shrink-0">
                          <Clock className="h-3.5 w-3.5" />
                          {event.time}
                        </div>
                        <div>
                          <p className="text-sm font-medium">{event.title}</p>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
                            <User className="h-3 w-3" />
                            {event.participant}
                          </div>
                        </div>
                      </div>
                      <Badge variant={config.variant}>{config.label}</Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
