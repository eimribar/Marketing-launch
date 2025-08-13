# CLAUDE.md - Yess.ai Marketing Launch Platform

## Project Overview

This is a comprehensive marketing launch management platform built for Yess.ai's product launch in 2025. The platform was transformed from a generic project management tool into a specialized marketing campaign tracker with budget management, KPI monitoring, and team collaboration features.

## Project Context

**Original Request**: Transform an existing project management tool into a marketing-specific platform for Yess.ai's product launch, including:
- Jobs to be done tracking
- Timeline management
- Team assignments
- Budget tracking
- Marketing-specific workflows

**Delivered Solution**: A fully functional React-based web application with:
- Marketing KPI dashboard
- Budget tracking system
- 28-task marketing playbook
- Team management with budget authority
- Phase-based timeline view
- Local data persistence

## Technical Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 6.1
- **Styling**: TailwindCSS 3.4
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Routing**: React Router DOM 7.2
- **Data Storage**: Browser localStorage
- **Deployment Target**: Vercel

## Key Features

### 1. Marketing Dashboard
- Real-time KPI tracking (8 metrics)
- Budget utilization monitoring
- Task progress visualization
- Team performance overview

### 2. Budget Management
- $850,000 total budget tracking
- Phase-wise allocation
- Spend vs. allocation comparison
- Budget health indicators

### 3. Marketing Playbook
- 28 pre-configured tasks
- 3 launch phases
- Task dependencies
- Resource allocation

### 4. Team Management
- 8 marketing roles
- Budget authority tracking
- Contact information
- Responsibility assignments

## Data Architecture

### Entities
```javascript
Campaign        // Main marketing campaign
MarketingPhase  // Launch phases (Pre-Launch, Launch, Post-Launch)
MarketingTask   // Individual marketing deliverables
MarketingTeam   // Team members with roles
Budget          // Budget allocations
Analytics       // Performance metrics
Comment         // Team communications
```

### Storage
- All data stored in browser's localStorage
- Automatic initialization on first load
- No external database required
- Data persists across sessions

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

# Run linting
npm run lint
```

## Deployment Instructions

### Vercel Deployment

1. **Connect GitHub Repository**
   - Go to Vercel dashboard
   - Import Git repository
   - Select the yess-marketing-launch repo

2. **Configure Build Settings**
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

3. **Environment Variables**
   - No environment variables required
   - All data stored locally

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Access via provided Vercel URL

## Project Structure

```
yess-marketing-launch/
├── src/
│   ├── api/
│   │   └── localStorage.js       # Local data management
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── BudgetWidget.jsx      # Budget tracker
│   │   │   ├── MarketingKPIWidget.jsx # KPI dashboard
│   │   │   └── ...other components
│   │   └── ui/                   # Radix UI components
│   ├── data/
│   │   ├── marketingPlaybook.js  # Task templates
│   │   └── initializeDemoData.js # Demo data setup
│   ├── pages/
│   │   ├── Dashboard.jsx         # Main dashboard
│   │   ├── Deliverables.jsx      # Marketing tasks
│   │   ├── Timeline.jsx          # Launch timeline
│   │   ├── Team.jsx              # Team management
│   │   └── ...other pages
│   └── App.jsx                   # Main app component
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization Guide

### Adding New Marketing Tasks
Edit `src/data/marketingPlaybook.js`:
```javascript
{
  number_index: 29,
  name: "New Task Name",
  category: 'pre-launch', // or 'launch', 'post-launch'
  budget_allocation: 50000,
  estimated_hours: 80,
  // ...other properties
}
```

### Modifying KPIs
Edit `src/components/dashboard/MarketingKPIWidget.jsx`:
```javascript
const defaultKPIs = [
  { 
    name: "New KPI", 
    target: 1000, 
    current: 500, 
    unit: "units",
    icon: IconComponent,
    color: "blue"
  }
]
```

### Updating Budget
Edit `src/pages/Dashboard.jsx`:
```javascript
<BudgetWidget tasks={deliverables} totalBudget={850000} />
// Change totalBudget value
```

### Adding Team Members
Use the Admin panel or edit `src/data/initializeDemoData.js`

## Known Considerations

1. **Data Persistence**: All data stored in browser localStorage
   - Data is device-specific
   - Clearing browser data will reset the app
   - Consider implementing export/import for data backup

2. **Multi-user Access**: Currently single-user focused
   - No real-time collaboration
   - Each browser instance has separate data
   - Future enhancement: Add backend for multi-user support

3. **Performance**: Optimized for up to 100 tasks
   - May need pagination for larger datasets
   - Consider implementing virtual scrolling for long lists

## Future Enhancements

- [ ] Export data to CSV/JSON
- [ ] Import data from spreadsheets
- [ ] Real-time collaboration
- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app version
- [ ] Integration with marketing tools (Google Analytics, Mailchimp, etc.)
- [ ] Automated reporting
- [ ] AI-powered insights

## Maintenance Notes

- **Regular Updates**: Check npm packages monthly
- **Browser Testing**: Test on Chrome, Firefox, Safari quarterly
- **Data Backup**: Implement export feature for user data protection
- **Performance Monitoring**: Track load times and optimize as needed

## Support & Contact

For issues or questions about this platform:
1. Check the CHANGELOG.md for recent updates
2. Review this documentation
3. Test in incognito mode to rule out localStorage issues
4. Clear localStorage if data corruption occurs: `localStorage.clear()`

## Version History

- **v1.0.0** (2025-01-13): Initial release with full marketing features

---

*This documentation was created for the Yess.ai Marketing Launch Platform transformation project.*