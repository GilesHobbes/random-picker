# random-picker

Pseudo-random picker mini app for Base.

## Routes

- `/`
- `/pick`
- `/results/[id]`
- `/history`
- `/about`

## Notes

- All user-facing UI text is English only.
- `app/layout.tsx` hardcodes the required `base:app_id` meta tag.
- `lib/wagmi.ts` includes a builder code suffix placeholder for later replacement.
- `utils/track.js` is ready for transaction attribution hooks.
