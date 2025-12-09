/**
 * SQL Explainer API - Basic Usage Example
 *
 * This example demonstrates the basic usage of the SQL Explainer API.
 * API Documentation: https://docs.apiverve.com/ref/sqlexplainer
 */

const API_KEY = process.env.APIVERVE_API_KEY || 'YOUR_API_KEY_HERE';
const API_URL = 'https://api.apiverve.com/v1/sqlexplainer';

/**
 * Make a POST request to the SQL Explainer API
 */
async function callSQLExplainerAPI() {
  try {
    // Request body
    const requestBody &#x3D; {
    &quot;query&quot;: &quot;SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id &#x3D; o.user_id WHERE u.created_at &gt; &#x27;2024-01-01&#x27; GROUP BY u.id HAVING COUNT(o.id) &gt; 5 ORDER BY order_count DESC&quot;,
    &quot;detail&quot;: &quot;standard&quot;
};

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    // Check if response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    // Check API response status
    if (data.status === 'ok') {
      console.log('✓ Success!');
      console.log('Response data:', data.data);
      return data.data;
    } else {
      console.error('✗ API Error:', data.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('✗ Request failed:', error.message);
    return null;
  }
}

// Run the example
callSQLExplainerAPI()
  .then(result => {
    if (result) {
      console.log('\n📊 Final Result:');
      console.log(JSON.stringify(result, null, 2));
    }
  });
