# Monova assignment (Expo + React Native Web)

A pixel-faithful recreation of the UI/interaction flow from the provided reference video.  
Built using Expo (React Native Web) with TypeScript.  

🔗 **Snack Demo**: [Open in Snack](https://snack.expo.dev/@hari291427/monova-assignment)  
---

## 🚀 How to Run

### Run in Snack (Web)
1. Open the [Snack link](https://snack.expo.dev/@hari291427/monova-assignment)
2. Select **Web** preview (right pane).
3. Interact with filters, chips and scrollbar.

### What I Replicated

1. Items Preview
2. Grid of items with image, category, color, style badges.
3. Filter chips and active-filter pills (update in real time).
4. Empty/loading placeholders.
5. Outfit & Collections
6. Scrollable cards.
7. Animations
8. Micro-interactions on filter chip toggles.

### Component Structure & State Management

/components
    - SearchBar.tsx       → Search field UI
    - OutfitCard.tsx      → Single outfit/item card
    - OutfitList.tsx      → Grid/scrollable list
    - FilterChips.tsx     → Toggle filters
  /utils
    - constants.ts          Mocked data (10–30 items)

### Assumptions & Limitations

1. All data is mocked in constants.ts.
2. Backend logic (real API, auth, etc.) not implemented.
3. Video reference animations replicated to ~90% fidelity (some platform differences on web).

### Animations & Interactions Implemented

1. Springy card entry (react-native-reanimated / RN Animated API).
2. Filter chips with subtle scale animation on press.
3. Pressable areas ≥44px for accessibility.
