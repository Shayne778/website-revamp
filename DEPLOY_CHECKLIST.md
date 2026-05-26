# Deployment Checklist (to avoid stale Pages updates)

1. Commit changes locally.
2. Push the current branch to **main** explicitly:
   ```bash
   git push -u origin HEAD:main
   ```
3. In GitHub Pages settings, use:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
4. Hard-refresh site (`Ctrl/Cmd + Shift + R`).
5. Verify version marker in utility bar matches latest commit.

## Why this matters
If you commit on a local branch named `work` but Pages publishes from `main`, the live site will not update until `main` receives that commit.
