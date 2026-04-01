import { Users, Briefcase, TrendingDown, Cake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { employees, departmentDistribution, calendarEvents } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    title: "Total de Colaboradores",
    value: employees.length.toString(),
    icon: Users,
    change: "+2 este mês",
  },
  {
    title: "Vagas Abertas",
    value: "5",
    icon: Briefcase,
    change: "3 urgentes",
  },
  {
    title: "Taxa de Turnover",
    value: "3.2%",
    icon: TrendingDown,
    change: "-0.5% vs mês anterior",
  },
  {
    title: "Aniversariantes",
    value: employees.filter((e) => e.birthday.startsWith("04-")).length.toString(),
    icon: Cake,
    change: "Abril",
  },
];

export default function Dashboard() {
  const birthdayPeople = employees.filter((e) => e.birthday.startsWith("04-"));
  const upcomingEvents = calendarEvents.slice(0, 4);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">People Analytics</h1>
        <p className="text-muted-foreground">Visão geral da sua equipe</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="stat-card-gradient">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Distribuição por Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(225 20% 90%)" />
                <XAxis dataKey="department" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid hsl(225 20% 90%)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  }}
                />
                <Bar dataKey="count" fill="hsl(262 52% 58%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Cake className="h-5 w-5 text-primary" />
                Aniversariantes de Abril
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {birthdayPeople.length > 0 ? (
                birthdayPeople.map((person) => (
                  <div key={person.id} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs font-semibold text-accent-foreground">
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{person.name}</p>
                      <p className="text-xs text-muted-foreground">Dia {person.birthday.split("-")[1]}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Nenhum aniversariante este mês.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Próximos Eventos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        event.type === "entrevista"
                          ? "default"
                          : event.type === "feedback"
                          ? "secondary"
                          : "outline"
                      }
                      className="text-xs"
                    >
                      {event.type}
                    </Badge>
                    <span className="text-sm truncate max-w-[120px]">{event.participant}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{event.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
