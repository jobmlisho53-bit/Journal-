export interface Trade {
  id?: string;
  date: string; // YYYY-MM-DD
  tradeNumber: number;
  direction: 'Buy' | 'Sell';
  probeEntry: number;
  probeSize: number;
  mainEntry: number;
  mainSize: number;
  avgEntry: number;
  slPrice: number;
  tpTarget: number;
  exitPrice: number;
  pl: number;
  notes: string;
  emotions: string;
  userId?: string;
  createdAt?: any;
}

export interface DailySummary {
  date: string;
  totalPL: number;
  trades: number;
  wins: number;
}
