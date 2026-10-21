# SQL Explainer API - PHP Package

SQL Explainer analyzes SQL queries and provides clear, plain English explanations of what they do. Perfect for learning SQL, code reviews, or documentation.

## Installation

Install via Composer:

```bash
composer require apiverve/sqlexplainer
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Sqlexplainer\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute([
    'query' => 'SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.created_at > \'2024-01-01\' GROUP BY u.id HAVING COUNT(o.id) > 5 ORDER BY order_count DESC',
    'detail' => 'standard'
]);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Sqlexplainer\Client;
use APIVerve\Sqlexplainer\Exceptions\APIException;
use APIVerve\Sqlexplainer\Exceptions\ValidationException;

try {
    $response = $client->execute(['query' => 'SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.created_at > \'2024-01-01\' GROUP BY u.id HAVING COUNT(o.id) > 5 ORDER BY order_count DESC', 'detail' => 'standard']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "explanation": "This SQL query retrieves the names of users and the number of orders they have placed. It filters users who were created after January 1, 2024. The query then groups the results by user ID and only includes users who have placed more than 5 orders, finally ordering the results by the order count in descending order.",
    "operation": "SELECT",
    "tables": [
      "users",
      "orders"
    ],
    "complexity": "moderate"
  }
}
```

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sqlexplainer?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sqlexplainer?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sqlexplainer?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
