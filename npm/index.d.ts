declare module '@apiverve/sqlexplainer' {
  export interface sqlexplainerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface sqlexplainerResponse {
    status: string;
    error: string | null;
    data: SQLExplainerData;
    code?: number;
  }


  interface SQLExplainerData {
      explanation: string;
      operation:   string;
      tables:      string[];
      complexity:  string;
  }

  export default class sqlexplainerWrapper {
    constructor(options: sqlexplainerOptions);

    execute(callback: (error: any, data: sqlexplainerResponse | null) => void): Promise<sqlexplainerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sqlexplainerResponse | null) => void): Promise<sqlexplainerResponse>;
    execute(query?: Record<string, any>): Promise<sqlexplainerResponse>;
  }
}
