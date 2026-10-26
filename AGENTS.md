# PII Pangkalpinang — AI Agent Governance & Operational Rules
*Standardized under the Baneeishaque/AI-Agent-Rules specification for zero-omission fidelity and anti-slop engineering.*

## 1. Zero-Omission Fidelity Mandate
- **No Hallucinated Claims:** Every assertion regarding test passage, linting status, zero errors, or zero warnings MUST be backed by reproducible execution logs, exact file paths, and line numbers.
- **Verification Commands:** Before proposing or declaring any task complete, the following commands must execute cleanly:
  - `npx tsc --noEmit` (TypeScript strict typecheck)
  - `npm run lint` (ESLint Next.js rules)
  - `npm run build` (Next.js production static export/build)
- **Zero Console Warnings:** The browser DevTools Console and Issues tab must remain at zero errors, zero warnings, and zero layout shift violations.

## 2. Anti-AI-Slop Design Principles (Leonxlnx/taste-skill)
- **Banned Clichés:**
  - NO unmotivated purple/indigo glowing radial mesh gradients.
  - NO default mechanical three-card feature rows without contextual layout reason.
  - NO lazy unstyled text on plain gray containers.
  - NO disconnected floating icon badges without functional significance.
- **Architectural Craft:**
  - Use purposeful technical typography, crisp hairline border grids reminiscent of civil engineering CAD/blueprints, and high-contrast color systems.
  - Require tactile interactivity: filterable matrices, live pathway simulators, accessible tabs, and interactive stateful explorers.
  - Maintain WCAG 2.1 AA color contrast (>= 4.5:1) and WCAG 2.5.3 (Label in Name) on all interactive elements.

## 3. Atomic Git Commit & Branch Policy
- Commits must be strictly atomic with conventional commit prefixes: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`.
- No auto-transitioning branches without user approval.
- Preserved assets: Never delete or alter `/logo-pii-black.png` or official credentials without explicit instruction.

## 4. Boundary Protection & Least Privilege
- Modifying configurations outside project scope is forbidden.
- Sensitive credentials, API keys, and environment variables must never be checked into git or emitted in client bundles.
