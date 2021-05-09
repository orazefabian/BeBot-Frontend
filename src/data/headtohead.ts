interface Encounter {
  fulltime_result: string;
  home_team: string;
  away_team: string;
  first_half_result: string;
  start_date: Date;
  season: string;
  competition_name: string;
  competition_cluster: string;
}

interface Team {
  first_half_draw: number;
  lost: number;
  avg_bookie_win_chance: number;
  first_half_win: number;
  first_half_lost: number;
  avg_bookie_lose_chance: number;
  avg_bookie_draw_chance: number;
  goals_conceived: number;
  avg_goals_conceived: number;
  won: number;
  draw: number;
  goals_scored: number;
  clean_sheet: number;
  avg_goals_scored: number;
  team_name: string;
}

interface Overall {
  total_goals: number;
  over_05: number;
  over_15: number;
  over_25: number;
  over_35: number;
  both_teams_scored: number;
  avg_goals_per_match: number;
  num_encounters: number;
}

interface Stat {
  home_team: Team;
  away_team: Team;
  overall: Overall;
}

interface HeadToHeadStats {
  encounters: Encounter[];
  stats: Stat;
}

export interface HeadToHead {
  data: HeadToHeadStats;
}
