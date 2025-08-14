# CLAUDE.md - Yess.ai Marketing Launch Platform

## Project Overview

This is a comprehensive marketing launch management platform built for Yess.ai's product launch in 2025. The platform was transformed from a generic project management tool into a specialized marketing campaign tracker with budget management, KPI monitoring, and team collaboration features.

## Project Context

**Original Request**: Transform an existing project management tool (Princess) into a marketing-specific platform for Yess.ai's product launch, including:
- Jobs to be done tracking
- Timeline management
- Team assignments
- Budget tracking
- Marketing-specific workflows

**Important Requirement**: The UI must be a pixel-perfect replica of the original Princess project management tool. Only the content and context should change to marketing-focused data.

**Delivered Solution**: A fully functional React-based web application with:
- Marketing task timeline (15 numbered steps)
- Team management with budget authority
- Phase-based timeline view
- Local data persistence
- Original Princess UI design preserved

## Session History & Key Decisions

### Initial Implementation (Attempt 1)
- Created full marketing platform with new widgets
- Added Marketing KPI Dashboard
- Added Budget Tracker Widget
- Changed UI colors to purple/blue gradient
- **Issue**: Too many UI changes, looked "childish" per user feedback

### UI Restoration (Attempt 2)
- Reverted to original Princess design
- Kept Princess logo and yellow/orange colors
- Restored original navigation labels
- Removed new widgets (Budget and KPI)
- Kept Yess.ai project headers and content
- **Result**: Pixel-perfect match with original UI

### Timeline Fix (Attempt 3)
- Fixed timeline not displaying marketing tasks
- Updated phase configuration from 'onboarding' to 'pre-launch'
- Set all 15 tasks to same category for proper grouping
- Added data versioning to force localStorage refresh
- **Result**: Timeline now shows 15 marketing task circles

## Technical Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 6.1
- **Styling**: TailwindCSS 3.4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Routing**: React Router DOM 7.2
- **Data Storage**: Browser localStorage
- **Deployment**: Vercel

## Current State of the Application

### What's Working
1. **Original Princess UI** - Fully preserved with pixel-perfect design
2. **Marketing Content** - 15 marketing tasks displayed in timeline
3. **Project Headers** - Shows "Yess.ai Product Launch 2025"
4. **Local Storage** - Data persists across sessions
5. **Timeline Display** - Shows "Phase 1: Marketing Launch Campaign" with 15 steps

### UI Components (Original Princess Design)
- Princess logo in sidebar
- Yellow/orange gradient sparkle badge
- Navigation: Dashboard, Deliverables, Timeline, Out of Scope, Team, Admin
- Maya Cohen user profile
- Original widget arrangement in sidebar

### Marketing Data Structure
```javascript
// 15 Marketing Tasks displayed in timeline:
1. Market Research (completed - green)
2. Brand Strategy
3. Target Personas
4. Content Strategy
5. Website Design
6. SEO Setup
7. Email Setup
8. Social Strategy
9. Influencer Outreach (completed - green)
10. PR & Media Kit (completed - green)
11. Demo Videos (completed - green)
12. Beta Program
13. Launch Event
14. Ad Campaign
15. Launch Emails
```

## File Structure & Key Files

### Modified Files
```
src/
├── api/
│   ├── localStorage.js       # Local data management (replaced Base44)
│   ├── entities.js          # Entity exports
│   └── integrations.js      # Integration stubs
├── components/
│   └── dashboard/
│       └── VisualTimeline.jsx  # Timeline display (phase config updated)
├── data/
│   ├── marketingPlaybook.js    # 28 marketing tasks with short names
│   └── initializeDemoData.js   # Demo data setup with versioning
├── pages/
│   ├── Dashboard.jsx        # Main dashboard (original widgets only)
│   └── Layout.jsx          # Original Princess design
└── App.jsx                 # Data initialization on load
```

### Deleted Files
- `src/components/dashboard/BudgetWidget.jsx` (removed to match original)
- `src/components/dashboard/MarketingKPIWidget.jsx` (removed to match original)
- `src/api/base44Client.js` (replaced with localStorage)

## Data Management

### localStorage Structure
```javascript
// Data stored with keys:
- yess_Campaign         // Main campaign data
- yess_MarketingPhase   // Individual tasks (stages)
- yess_MarketingTeam    // Team members
- yess_Comment          // Comments on tasks
- yess_data_version     // Version control (currently 'v2.0')
```

### Data Versioning
- Version check on app load
- Automatically clears old data when version changes
- Current version: 'v2.0'

## Known Issues & Solutions

### Issue 1: Timeline Not Showing
**Problem**: Timeline showed original demo data instead of marketing tasks
**Solution**: 
- Fixed phase ID mismatch ('onboarding' → 'pre-launch')
- Set all tasks to same category
- Added version control to force data refresh

### Issue 2: UI Changes Too Drastic
**Problem**: Initial implementation changed too much of the UI
**Solution**: 
- Reverted to exact original Princess design
- Only changed text content, not visual design

### Issue 3: Build Errors on Vercel
**Problem**: Import of non-existent base44Client
**Solution**: 
- Replaced with integration stubs
- Removed all Base44 SDK dependencies

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### GitHub Repository
https://github.com/eimribar/Marketing-launch

### Vercel Deployment
- Auto-deploys on push to main branch
- Build settings:
  - Framework: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`

## Next Steps & Future Work

### Immediate Priorities
1. ✅ Timeline displaying marketing tasks (DONE)
2. ⏳ Add remaining marketing phases (Launch, Post-Launch)
3. ⏳ Implement task dependencies visualization
4. ⏳ Add team member assignment to tasks

### Future Enhancements
1. **Budget Tracking** - Add budget module (separate page, not widget)
2. **Analytics Page** - Replace Brandbook with analytics
3. **Task Details** - Enhance deliverable detail views
4. **Multiple Phases** - Add Phase 2 (Launch) and Phase 3 (Post-Launch)
5. **Export/Import** - Data backup functionality
6. **Real Collaboration** - Multi-user support with backend

### UI Consistency Rules
**IMPORTANT**: When making ANY future changes:
1. DO NOT modify the visual design
2. DO NOT change colors, fonts, or layouts
3. DO NOT add new widgets to existing pages
4. ONLY change text content and data
5. New features should be separate pages, not modifications

## Testing Checklist

- [ ] Timeline shows 15 numbered circles
- [ ] Phase header shows "Marketing Launch Campaign"
- [ ] Tasks 1, 9-11 show as completed (green)
- [ ] Sidebar shows Princess logo
- [ ] Navigation uses original labels
- [ ] Project header shows Yess.ai content
- [ ] Data persists after refresh
- [ ] Build succeeds on Vercel

## Contact & Support

For issues or questions:
1. Check this documentation
2. Review CHANGELOG.md for recent changes
3. Test in incognito mode for localStorage issues
4. Clear cache: `localStorage.clear()` in console

## Important Notes

1. **UI Design Philosophy**: The application should look EXACTLY like the original Princess project management tool, with only the content being marketing-focused.

2. **Data Persistence**: All data stored locally in browser. Clearing browser data will reset the application.

3. **Version Control**: Incrementing DATA_VERSION in initializeDemoData.js will force a complete data refresh for all users.

---

*Last Updated: January 13, 2025*
*Session Duration: ~3 hours*
*Total Commits: 6*