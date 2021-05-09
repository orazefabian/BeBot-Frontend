import { Odds } from './odds';
import { Probabilities } from './probabilities';

interface Market {
  name: string;
}

interface PredPerMarket {
  classic: MarketStat;
}

interface MarketStat {
  odds: Odds;
  prediction: string;
  probabilities: Probabilities;
  status: string;
}

interface Details {
  available_markets: Market[];
  away_strength: number;
  away_team: string;
  competition_cluster: string;
  competition_name: string;
  distance_between_teams: number;
  federation: string;
  field_length: number;
  field_width: number;
  home_team: string;
  home_strength: number;
  id: number;
  is_expired: boolean;
  last_update_at: Date;
  stadium_capacity: number;
  start_date: Date;
  result: string;
  season: string;
  prediction_per_market: PredPerMarket;
}

export interface PredictionDetails {
  data: Details;
}
