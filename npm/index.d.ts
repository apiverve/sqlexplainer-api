declare module '@apiverve/sqlexplainer' {
  export interface sqlexplainerOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface sqlexplainerResponse {
    status: string;
    error: string | null;
    data: SQLExplainerData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SQLExplainerData {
      explanation: null | string;
      operation:   null | string;
      tables:      (null | string)[];
      complexity:  null | string;
  }

  export default class sqlexplainerWrapper {
    constructor(options: sqlexplainerOptions);

    execute(callback: (error: any, data: sqlexplainerResponse | null) => void): Promise<sqlexplainerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sqlexplainerResponse | null) => void): Promise<sqlexplainerResponse>;
    execute(query?: Record<string, any>): Promise<sqlexplainerResponse>;
  }
}
