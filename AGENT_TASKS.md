# Agent Tasks (source of truth)

## Queue
- [ ] WS: Greedy tiler worker + compare counts/costs — https://github.com/logphile/Briko/issues/7

Goal: Workerized greedy tiler O(w*h) and UI toggle to compare Singles vs Greedy.

Acceptance:
- Web Worker (OffscreenCanvas if available) for greedy tiler
- Toggle: Singles | Greedy; recompute BOM + estimated cost
- Delta summary: parts Δ and cost Δ vs Singles
- No UI jank at 128×128; <2s total at 256×256.
- [ ] (example) Kickoff task — describe it or use Issues with the "windsurf" label to enqueue automatically.

## Done
