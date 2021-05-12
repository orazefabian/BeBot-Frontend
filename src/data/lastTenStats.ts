interface Encounter {
  fulltime_result: string;
  played_against: string;
  result: string;
  start_date: Date;
  played_away: boolean;
  goals_scored_first_half: number;
  odds_against: number;
  odds_draw: number;
  odds_for: number;
  position: number;
}

interface Stats {
  lost_as_home_team: number;
  draws: number;
  num_played_as_home_team: number;
  lost: number;
  goals_scored: number;
  goals_conceived_second_half: number;
  goals_conceived_first_half: number;
  wins: number;
  draws_as_away_team: number;
  goals_conceived_as_home_team: number;
  results_as_away_team: string;
  goals_scored_as_away_team: number;
  results_as_home_team: string;
  goals_scored_first_half: number;
  clean_sheets: number;
  num_played_as_away_team: number;
  wins_as_home_team: number;
  draws_as_home_team: number;
  over_15: number;
  results: string;
  both_teams_scored: number;
  goals_conceived_as_away_team: number;
  over_25: number;
  wins_as_away_team: number;
  lost_as_away_team: number;
  goals_conceived: number;
  goals_scored_as_home_team: number;
  over_05: number;
  goals_scored_second_half: number;
  over_35: number;
}

interface LastTen {
  encounters: Encounter[];
  stats: Stats;
}

export interface LastTenStats {
  data: LastTen;
}
