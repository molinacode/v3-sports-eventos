import revenueData from "../data/revenue.json";

export type ScenarioKey = "pesimista" | "realista" | "optimista";

export interface Scenario {
  label: string;
  femaleTeams: number;
  femMatchFee: number;
  femInscription: number;
  princeKids: number;
  princeMatchFee: number;
  princeInscription: number;
  mixedPlayers: number;
  mixedFee: number;
}

export const scenarios = revenueData.scenarios as Record<ScenarioKey, Scenario>;
export const rounds = revenueData.rounds;
export const ranges = revenueData.ranges;
export const extraKPIs = revenueData.extraKPIs;

export function computeRevenue(s: Scenario) {
  const matchesPerFemaleRound = 4;
  const matchesPerPrinceRound = 2.5;

  const femPerRound = s.femaleTeams * 2 * s.femMatchFee * matchesPerFemaleRound +
    (s.femaleTeams * s.femInscription) / rounds.femaleRounds;
  const fem = femPerRound * rounds.femaleRounds;

  const princePerRound = s.princeKids * s.princeMatchFee * matchesPerPrinceRound +
    (s.princeKids * s.princeInscription) / rounds.princeRounds;
  const prince = princePerRound * rounds.princeRounds;

  const mixedPerRound = s.mixedPlayers * s.mixedFee;
  const mixed = mixedPerRound * rounds.mixedRounds;

  const total = fem + prince + mixed;

  return {
    fem: Math.round(fem),
    femPerRound: Math.round(femPerRound),
    prince: Math.round(prince),
    princePerRound: Math.round(princePerRound),
    mixed: Math.round(mixed),
    mixedPerRound: Math.round(mixedPerRound),
    total: Math.round(total),
  };
}

export function formatEuro(n: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}
