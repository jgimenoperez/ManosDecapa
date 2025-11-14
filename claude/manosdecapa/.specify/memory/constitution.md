# Manos de Capa Constitution

## Core Principles

### I. Test-First Development (NON-NEGOTIABLE)

Write tests first, ensure they fail, then implement. Red-Green-Refactor discipline is mandatory:
- All new features MUST have passing tests before merge
- Tests MUST exist independent of implementation
- Contract tests for public APIs; integration tests for feature workflows
- Red phase: test fails; Green phase: minimal code passes test; Refactor: improve without breaking

**Rationale**: Tests as specification; prevents over-implementation; ensures debuggability and maintainability.

### II. Semantic Versioning & Breaking Changes

MAJOR.MINOR.PATCH format required. Breaking changes MUST trigger MAJOR version bump:
- **MAJOR**: Backward-incompatible API changes, removed functionality, significant architectural shifts
- **MINOR**: New features, non-breaking enhancements, deprecated features
- **PATCH**: Bug fixes, documentation, internal refactoring, tooling updates
- All breaking changes MUST be documented with migration guide
- Deprecation warnings MUST precede removal by at least one MAJOR version

**Rationale**: Predictable dependency management; clear communication of stability; enables safe upstream consumption.

### III. Code Review & Complexity Justification

All contributions require review approval. Non-trivial complexity must be justified:
- Pull requests MUST pass automated checks (tests, linting, type checks)
- Review MUST verify: test coverage, principle compliance, clarity of intent
- Architectural complexity (multiple projects, patterns, layers) MUST include written justification in PR or design doc
- Simpler alternatives MUST be explicitly considered and rejected (with rationale) before approval
- Single reviewer sufficient for low-risk changes; high-risk requires 2+ approvals

**Rationale**: Knowledge sharing; principle enforcement; prevention of unnecessary complexity; accountability.

### IV. Modular Design & Independent Testing

Features built as discrete, self-contained modules where possible:
- Each module MUST be independently testable
- Modules SHOULD have single, clear purpose
- External dependencies explicitly declared
- Contract boundaries clearly defined and tested
- When practical: deploy/iterate each module independently

**Rationale**: Parallel development; reduced coupling; easier testing; faster iteration on independent features.

## Code Review Standards

- **Mandatory**: automated test pass, linting/format compliance, type safety
- **Complexity Gate**: Write justification if introducing: new language, new dependency pattern, >3 new files, multi-step refactoring
- **Review Depth**: Low-risk (test fix, doc, typing) = 1 approval; Feature (new code) = 1+ approval with complexity check

## Amendment Process

1. Propose amendment with rationale (existing issue or new discussion)
2. Document current principle (capture original language)
3. State proposed change and MAJOR/MINOR/PATCH bump reason
4. Update this file and propagate changes to `.specify/templates/`
5. Commit with message: `docs: amend constitution to vX.Y.Z (principle addition/change)`

Amendments require at least one approval review before merge.

## Governance

This Constitution supersedes all other practices and guidelines. All pull requests, design decisions, and technical choices MUST comply with these principles. Violations discovered during review MUST be corrected before approval.

Use `.specify/templates/` for implementation guidance. The `/speckit.*` commands enforce constitution gates at specification, planning, and task generation stages.

**Version**: 1.0.0 | **Ratified**: 2025-11-14 | **Last Amended**: 2025-11-14
