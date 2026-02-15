using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.SQLExplainer
{
    /// <summary>
    /// Query options for the SQL Explainer API
    /// </summary>
    public class SQLExplainerQueryOptions
    {
        /// <summary>
        /// The SQL query to explain
        /// </summary>
        [JsonProperty("query")]
        public string Query { get; set; }

        /// <summary>
        /// Explanation detail level: brief, standard, or detailed
        /// </summary>
        [JsonProperty("detail")]
        public string Detail { get; set; }
    }
}
