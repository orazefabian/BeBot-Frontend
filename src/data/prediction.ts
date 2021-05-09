import { Time } from '@angular/common';
import { Probabilities } from 'src/data/probabilities';
import { Odds } from 'src/data/odds';

interface PredData {
  id: number;
  federation: string;
  field_length: number;
  away_team: string;
  competition_name: string;
  start_date: Date;
  prediction: string;
  market: string;
  home_strength: number;
  probabilities: Probabilities;
  stadium_capacity: number;
  is_expired: boolean;
  distance_between_teams: number;
  last_update_at: Date;
  competition_cluster: string;
  status: string;
  result: string;
  away_strength: number;
  field_width: number;
  home_team: string;
  season: string;
}

export interface Prediction {
  data: PredData[];
}
