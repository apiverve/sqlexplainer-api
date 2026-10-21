# SQL Explainer API - Ruby Gem

SQL Explainer analyzes SQL queries and provides clear, plain English explanations of what they do. Perfect for learning SQL, code reviews, or documentation.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_sqlexplainer'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_sqlexplainer
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_sqlexplainer'

# Initialize the client
client = APIVerve::Sqlexplainer::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  query: "SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.created_at > '2024-01-01' GROUP BY u.id HAVING COUNT(o.id) > 5 ORDER BY order_count DESC",
  detail: "standard"
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ query: "SELECT u.name, COUNT(o.id) as order_count FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE u.created_at > '2024-01-01' GROUP BY u.id HAVING COUNT(o.id) > 5 ORDER BY order_count DESC", detail: "standard" })
  puts response["data"]
rescue APIVerve::Sqlexplainer::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Sqlexplainer::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Sqlexplainer::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/sqlexplainer?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/sqlexplainer?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/sqlexplainer?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
