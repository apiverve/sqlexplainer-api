Pod::Spec.new do |s|
  s.name             = 'APIVerveSQLExplainer'
  s.version          = '1.2.3'
  s.summary          = 'SQL Explainer analyzes SQL queries and provides clear, plain English explanations of what they do.'
  s.description      = <<-'DESC'
SQL Explainer analyzes SQL queries and provides clear, plain English explanations of what they do. Perfect for learning SQL, code reviews, or documentation.

This iOS/macOS SDK provides a convenient way to access the SQL Explainer from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/sqlexplainer?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/sqlexplainer-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveSQLExplainer/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
