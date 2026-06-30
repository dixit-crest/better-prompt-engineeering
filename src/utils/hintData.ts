export interface Hint {
  description: string
  examples: string[]
  placeholder: string
}

export const HINT_DATA: Record<string, Hint> = {
  mainPrompt: {
    description: 'Provide a high-level summary of the overall task or goal.',
    placeholder: 'e.g., Create a robust authentication system using JWT and Refresh Tokens...',
    examples: [
      'Build a real-time chat application with group messaging and file sharing.',
      'Design a scalable microservices architecture for an e-commerce platform.',
      'Implement a predictive maintenance system using machine learning for industrial sensors.',
      'Develop a high-performance web crawler with proxy rotation and CAPTCHA solving.',
      'Create a secure file-encrypting CLI tool using AES-256-GCM.',
    ],
  },
  technologies: {
    description: 'List the specific stack, libraries, and frameworks to be used.',
    placeholder: 'e.g., React, TypeScript, Tailwind CSS, Prisma, PostgreSQL...',
    examples: [
      'React 18, Vite, Tailwind CSS, shadcn/ui, Lucide Icons',
      'Node.js, Express, MongoDB, Mongoose, Redis for caching',
      'Python 3.11, FastAPI, Pydantic, SQLAlchemy, PostgreSQL',
      'Next.js 14, App Router, Server Actions, Clerk Auth, Neon DB',
      'Rust, Actix-web, Diesel ORM, PostgreSQL, Docker',
    ],
  },
  subtasks: {
    description: 'Break down the main task into smaller, manageable implementation steps.',
    placeholder: 'e.g., Setup project structure and folder organization...',
    examples: [
      'Configure project boiler-plate with ESLint and Prettier.',
      'Implement the database schema and migration scripts.',
      'Create the RESTful API endpoints for user authentication.',
      'Build the responsive UI components using the design system.',
      'Write unit tests for the core business logic.',
    ],
  },
  successGoals: {
    description: 'Define the high-level business or functional outcomes.',
    placeholder: 'e.g., Achieve 99.9% uptime for the payment processing module...',
    examples: [
      'Reduce page load time to under 1.5 seconds for mobile users.',
      'Ensure 100% data consistency across distributed services.',
      'Increase user engagement by 20% through personalized recommendations.',
      'Implement zero-downtime deployment strategy.',
      'Achieve SOC2 compliance for data security and privacy.',
    ],
  },
  successCriteria: {
    description: 'Quantifiable metrics or specific conditions that must be met.',
    placeholder: 'e.g., All unit tests pass with >90% code coverage...',
    examples: [
      'API response time stays below 200ms for 95% of requests.',
      'System handles 10,000 concurrent users without performance degradation.',
      'Lighthouse performance score is above 90 for all core pages.',
      'No security vulnerabilities found in the OWASP Top 10 list.',
      'User feedback score averages above 4.5/5 during beta testing.',
    ],
  },
  context: {
    description: 'Explain why this task is needed and provide any background info.',
    placeholder: 'e.g., We are migrating from a legacy monolith to modern microservices...',
    examples: [
      'This feature is part of a larger initiative to modernize our customer portal.',
      'The current manual process takes 4 hours; we need to automate it.',
      "We've seen an increase in security threats, requiring enhanced encryption.",
      'Our competitor recently launched a similar feature, and we need to match it.',
      'The legacy database is reaching its limits; we need a scalable alternative.',
    ],
  },
  dataExamples: {
    description: 'Provide sample inputs and expected outputs to clarify logic.',
    placeholder: "e.g., Input: { id: 1 }, Output: { name: 'Admin' }...",
    examples: [
      "Input: 'hello world', Output: 'HELLO WORLD' (uppercase filter)",
      "Input: { amount: 100, currency: 'USD' }, Output: { total: 108.5, tax: 8.5 }",
      'Input: [1, 2, 3, 4], Output: { sum: 10, avg: 2.5 }',
      "Input: '2023-01-01', Output: 'Sunday' (date to weekday)",
      "Input: 'user@example.com', Output: { valid: true, domain: 'example.com' }",
    ],
  },
  functionalRequirements: {
    description: "Detail what the system should do from a user's perspective.",
    placeholder: 'e.g., Users must be able to reset their password via email link...',
    examples: [
      'System shall allow users to upload files up to 50MB.',
      'Users can filter search results by date, category, and price.',
      'The application must support multi-language localization.',
      'Admin users can export data in CSV and PDF formats.',
      'Real-time notifications should be sent for important events.',
    ],
  },
  userStories: {
    description:
      "Define features using the 'As a [user], I want to [action], so that [benefit]' format.",
    placeholder:
      'e.g., As a customer, I want to see my order history so I can track my spending...',
    examples: [
      'As a developer, I want clear API documentation so I can integrate quickly.',
      'As a manager, I want to see weekly reports to track team progress.',
      'As a visitor, I want to browse products without creating an account.',
      'As a premium user, I want ad-free access to all features.',
      'As a security officer, I want to see audit logs for all sensitive actions.',
    ],
  },
  businessRules: {
    description: 'Outline the logic, policies, and constraints of the business domain.',
    placeholder: 'e.g., Refunds are only processed within 30 days of purchase...',
    examples: [
      'A user cannot have more than one active subscription at a time.',
      'Discounts do not apply to products already on sale.',
      'Accounts are locked after 5 consecutive failed login attempts.',
      'Free tier users are limited to 3 projects and 100MB storage.',
      'Only managers can approve expenses exceeding $1,000.',
    ],
  },
  technicalArchitecture: {
    description: 'Describe the high-level design and how components interact.',
    placeholder: 'e.g., Using a serverless architecture with AWS Lambda and DynamoDB...',
    examples: [
      'Event-driven architecture using RabbitMQ for inter-service communication.',
      'Client-side rendering with React and state management via Redux Toolkit.',
      'Containerized deployment using Docker and Kubernetes on Google Cloud.',
      'Server-side rendering (SSR) with Next.js for improved SEO.',
      'Clean Architecture with separation of concerns between layers.',
    ],
  },
  apiSpecifications: {
    description: 'Define the endpoints, methods, and data structures of the API.',
    placeholder: 'e.g., POST /api/v1/login - Returns a JWT token and user info...',
    examples: [
      'GET /users/{id} - Fetches user profile with status code 200 OK.',
      'PUT /products/{sku} - Updates product details; requires admin token.',
      'DELETE /comments/{id} - Soft deletes a comment by marking it inactive.',
      'POST /orders - Creates a new order and triggers a payment webhook.',
      'GET /search?q={query}&page={n} - Returns paginated search results.',
    ],
  },
  behaviorSpecifications: {
    description: 'Specify how the system should behave under certain conditions.',
    placeholder:
      'e.g., If the user is logged in, show the profile page; otherwise, redirect to login...',
    examples: [
      "When a user clicks 'Delete', show a confirmation modal first.",
      "If the internet connection is lost, show a 'Reconnecting' banner.",
      'Automatically save drafts every 30 seconds while the user is typing.',
      'Sort the list by priority first, then by the most recent update.',
      "Disable the 'Submit' button until all required fields are filled.",
    ],
  },
  nonFunctionalRequirements: {
    description: 'Define system attributes like performance, security, and usability.',
    placeholder: 'e.g., The system must support at least 100 concurrent users...',
    examples: [
      'Password hashing must use Argon2id with at least 12 iterations.',
      'All API endpoints must have a rate limit of 100 requests per minute.',
      'UI must be fully accessible and meet WCAG 2.1 Level AA standards.',
      'Application should be available in dark and light modes.',
      'Maximum downtime allowed for maintenance is 2 hours per month.',
    ],
  },
  testingStrategy: {
    description: 'Outline the types and tools for testing the implementation.',
    placeholder: 'e.g., Use Vitest for unit testing and Playwright for E2E tests...',
    examples: [
      'Perform unit testing for all utility functions using Jest.',
      'Conduct end-to-end (E2E) testing for the checkout flow with Cypress.',
      'Use Postman for manual API testing and validation.',
      'Implement integration tests for database-dependent services.',
      'Run accessibility audits using axe-core on every deployment.',
    ],
  },
  constraints: {
    description: 'Specify any limitations or requirements that must be followed.',
    placeholder: 'e.g., Must use Node.js v18+ and cannot use external CSS libraries...',
    examples: [
      'Total bundle size must not exceed 250KB Gzipped.',
      'Must be compatible with IE11 (if specifically required).',
      'No third-party libraries allowed for the core encryption logic.',
      'Project must be completed within a $5,000 budget.',
      'The solution must run entirely on-premise without cloud access.',
    ],
  },
  // Spec Structure fields
  preconditions: {
    description: 'Conditions that must be true before the action starts.',
    placeholder: 'e.g., User must be authenticated and have an active subscription...',
    examples: [
      'Database connection is established and healthy.',
      'The input file exists and is readable by the process.',
      "The user has 'admin' permissions for this resource.",
      'A valid session token is present in the request header.',
      'The system has at least 1GB of free memory available.',
    ],
  },
  inputs: {
    description: 'Data or signals provided to the system or function.',
    placeholder: "e.g., JSON object containing 'email' and 'password'...",
    examples: [
      "String 'searchQuery' and optional 'category' filter.",
      'Array of integers to be sorted in ascending order.',
      "Multipart/form-data containing the user's avatar image.",
      'Webhook payload from Stripe after a successful payment.',
      'Current GPS coordinates and radius in meters.',
    ],
  },
  actions: {
    description: 'The steps or logic performed by the system.',
    placeholder: 'e.g., Validate the email format, then check the database for the user...',
    examples: [
      'Normalize the text by removing special characters.',
      'Encrypt the sensitive data using the provided public key.',
      'Calculate the total price including taxes and shipping fees.',
      'Query the database for matching records based on the search criteria.',
      'Send a confirmation email to the user with their order details.',
    ],
  },
  outputs: {
    description: 'The result or data produced by the system or function.',
    placeholder: 'e.g., Returns a 200 OK status with the user profile JSON...',
    examples: [
      'A PDF report generated from the provided data.',
      "Boolean 'true' if the operation succeeded, 'false' otherwise.",
      "A formatted string representing the date in 'MM/DD/YYYY' format.",
      'The generated unique ID for the newly created resource.',
      'Error message and status code 400 if validation fails.',
    ],
  },
  postconditions: {
    description: 'Conditions that must be true after the action completes.',
    placeholder: 'e.g., The user record is updated in the database and a log is created...',
    examples: [
      'An audit trail entry is created for the sensitive action.',
      "The user's cache is invalidated to reflect the new changes.",
      'All temporary files are securely deleted from the server.',
      "A notification is pushed to the user's mobile device.",
      'The total inventory count is decremented by the order quantity.',
    ],
  },
  // Behavior Sections fields
  happyPath: {
    description: 'The standard successful flow where everything works as expected.',
    placeholder: 'e.g., User enters valid credentials, login succeeds, and user is redirected...',
    examples: [
      'Form is filled correctly, submitted, and success message is shown.',
      'Search returns multiple results that the user can browse.',
      'Payment is authorized on the first attempt and order is placed.',
      'File uploads successfully and is immediately available for viewing.',
      'Email is sent and received by the recipient without issues.',
    ],
  },
  edgeCases: {
    description: 'Unusual or extreme conditions that the system should handle.',
    placeholder: 'e.g., User submits an empty form, or enters a very long string...',
    examples: [
      'User tries to upload a file exactly at the size limit.',
      'Search query contains only special characters or emojis.',
      "Network connection drops exactly when the 'Submit' button is clicked.",
      'Account with the same email is created simultaneously by two users.',
      'System clock is out of sync with the server time.',
    ],
  },
  failureStates: {
    description: 'How the system responds when something goes wrong.',
    placeholder: 'e.g., Show a friendly error message and allow the user to retry...',
    examples: [
      "Display 'Invalid password' when authentication fails.",
      'Show a 404 page when the requested resource is not found.',
      'Log the error and notify the dev team via Slack/PagerDuty.',
      'Retry the database connection up to 3 times with exponential backoff.',
      'Gracefully degrade by showing cached data if the API is offline.',
    ],
  },
}
