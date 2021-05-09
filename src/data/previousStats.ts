interface Accuracy {
  last_14_days: number;
  last_30_days: number;
  last_7_days: number;
  yesterday: number;
}

interface SingleDetail {
  lost: number;
  pending: number;
  postponed: number;
  total: number;
  won: number;
}

interface Details {
  last_14_days: SingleDetail;
  last_30_days: SingleDetail;
  last_7_days: SingleDetail;
  yesterday: SingleDetail;
}

interface StatsData {
  accuracy: Accuracy;
  details: Details;
  market: string;
}

export interface PreviousStats {
  data: StatsData;
}
