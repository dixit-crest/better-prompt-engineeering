# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Prompt Checklist Builder is a structured web application designed to help developers transform rough LLM prompts into precise, context-rich instruction sets. It utilizes a local Ollama model to auto-fill structured fields based on an initial prompt, forcing specificity and reducing hallucinations in generated code.

## Development Commands
- **Install Dependencies**: `npm install`
- **Run Development Server**: `npm run dev`
- **Build Project**: `npm run build`
- **Lint Code**: `npm run lint`
- **Run Tests**: `npm test`

## Architecture
The application follows a component-based architecture with a clear separation between UI and business logic.

- `src/components/`: UI components organized by feature (e.g., prompt sections, selectors, final assembly view).
- `src/hooks/`: Reusable logic for state management and Ollama integration.
- `src/services/`: API clients, specifically for interacting with the local Ollama instance.
- `src/types/`: Strict TypeScript definitions for prompt structures, section configurations, and Ollama response payloads.
- `src/utils/`: Helper functions for prompt assembly, formatting, and string manipulation.

### Key Design Patterns
- **Single Source of Truth**: Prompt sections and their metadata are defined in a central configuration to ensure consistency between the UI forms and the final prompt generator.
- **JSON-Driven Auto-fill**: The Ollama integration expects and processes structured JSON to deterministically map suggestions to the UI fields.
- **Modular Prompt Assembly**: The final prompt is constructed by iterating through enabled sections in a predefined priority order.

## Implementation Constraints
- **Local-First**: All AI analysis must be performed via local Ollama instances.
- **Optionality**: Every major prompt section (except the Main Prompt) must be optional and easily toggleable by the user.
- **Preservation**: The final assembly must preserve user wording for critical sections like business rules and acceptance criteria.
