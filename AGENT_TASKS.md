# Agent Tasks (source of truth)

## Queue
- [ ] WS: /voxel route with InstancedMesh preview — https://github.com/logphile/Briko/issues/6

Goal: Ship /voxel with Three.js InstancedMesh preview and shared uploader.

Acceptance:
- Route /voxel (Nuxt page)
- Upload or reuse last image; map to 32^3 or 64^3 voxel grid (dropdown)
- OrbitControls; perf target: 60 FPS on laptop GPU
- Reuse color palette + dithering off; later: greedy layer export (out of scope here)
- Code-split + lightweight defaults (no layout shift).
- [ ] (example) Kickoff task — describe it or use Issues with the "windsurf" label to enqueue automatically.

## Done
