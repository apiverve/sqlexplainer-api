"""
SQL Explainer API - Basic Usage Example

This example demonstrates the basic usage of the SQL Explainer API.
API Documentation: https://docs.apiverve.com/ref/sqlexplainer
"""

import os
import requests
import json

API_KEY = os.getenv('APIVERVE_API_KEY', 'YOUR_API_KEY_HERE')
API_URL = 'https://api.apiverve.com/v1/sqlexplainer'

def call_sqlexplainer_api():
    """
    Make a POST request to the SQL Explainer API
    """
    try:
        # Request body
        request_body &#x3D; {
    &#x27;query&#x27;: &#x27;SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id &#x3D; o.user_id WHERE u.created_at &gt; &#x27;2024-01-01&#x27; GROUP BY u.id HAVING COUNT(o.id) &gt; 5 ORDER BY order_count DESC&#x27;,
    &#x27;detail&#x27;: &#x27;standard&#x27;
}

        headers = {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json'
        }

        response = requests.post(API_URL, headers=headers, json=request_body)

        # Raise exception for HTTP errors
        response.raise_for_status()

        data = response.json()

        # Check API response status
        if data.get('status') == 'ok':
            print('✓ Success!')
            print('Response data:', json.dumps(data['data'], indent=2))
            return data['data']
        else:
            print('✗ API Error:', data.get('error', 'Unknown error'))
            return None

    except requests.exceptions.RequestException as e:
        print(f'✗ Request failed: {e}')
        return None

if __name__ == '__main__':
    print('📤 Calling SQL Explainer API...\n')

    result = call_sqlexplainer_api()

    if result:
        print('\n📊 Final Result:')
        print(json.dumps(result, indent=2))
    else:
        print('\n✗ API call failed')
