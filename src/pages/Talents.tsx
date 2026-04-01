import { useState, useMemo } from "react";
import { candidates, type Candidate } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, MapPin, DollarSign, Mail, Phone, Clock } from "lucide-react";

const allSkills = [...new Set(candidates.flatMap((c) => c.skills))].sort();

export default function Talents() {
  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [selected, setSelected] = useState<Candidate | null>(null);

  const locations = [...new Set(candidates.map((c) => c.location))].sort();

  const filtered = useMemo(() => {
    return candidates.filter((c) => {
      const matchSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.role.toLowerCase().includes(search.toLowerCase());
      const matchSkill = skillFilter === "all" || c.skills.includes(skillFilter);
      const matchLocation = locationFilter === "all" || c.location === locationFilter;
      return matchSearch && matchSkill && matchLocation;
    });
  }, [search, skillFilter, locationFilter]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold">Banco de Talentos</h1>
        <p className="text-muted-foreground">Encontre candidatos por competências</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou cargo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 bg-card"
          />
        </div>
        <Select value={skillFilter} onValueChange={setSkillFilter}>
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Competência" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas Competências</SelectItem>
            {allSkills.map((skill) => (
              <SelectItem key={skill} value={skill}>{skill}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Localização" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas Localizações</SelectItem>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-xl border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Candidato</TableHead>
              <TableHead>Competências</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Pretensão</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((candidate) => (
              <TableRow
                key={candidate.id}
                className="cursor-pointer hover:bg-accent/30"
                onClick={() => setSelected(candidate)}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {candidate.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-medium">{candidate.name}</p>
                      <p className="text-xs text-muted-foreground">{candidate.role}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{candidate.location}</TableCell>
                <TableCell className="text-muted-foreground">{candidate.salaryExpectation}</TableCell>
                <TableCell>
                  <Badge variant={candidate.score >= 90 ? "default" : candidate.score >= 80 ? "secondary" : "outline"}>
                    {candidate.score}%
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  Nenhum candidato encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {selected.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-xl">{selected.name}</p>
                    <p className="text-sm font-normal text-muted-foreground">{selected.role}</p>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-5 mt-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> {selected.email}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> {selected.phone}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> {selected.location}</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><DollarSign className="h-4 w-4" /> {selected.salaryExpectation}</div>
                  <div className="flex items-center gap-2 text-muted-foreground col-span-2"><Clock className="h-4 w-4" /> {selected.experience} de experiência</div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Competências</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.skills.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
                  </div>
                </div>
                <div className="rounded-lg bg-secondary p-4">
                  <p className="text-sm font-medium mb-1">Currículo Resumido</p>
                  <p className="text-sm text-muted-foreground">
                    Profissional com {selected.experience} de experiência na área de {selected.role.toLowerCase()}.
                    Domínio em {selected.skills.join(", ")}. Localizado(a) em {selected.location} com pretensão
                    salarial de {selected.salaryExpectation}.
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
