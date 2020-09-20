interface APIEntryResponse {
  POS: string;
  freq: number;
  syns: string[];
  word: string;
  _id?: string;
}

export default APIEntryResponse