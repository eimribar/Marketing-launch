# 🚀 Yess.ai Marketing Launch Platform

A comprehensive marketing campaign management platform designed for Yess.ai's 2025 product launch. Track tasks, manage budgets, monitor KPIs, and coordinate your marketing team all in one place.

![Yess.ai Marketing Platform](https://img.shields.io/badge/Version-1.0.0-blue) ![React](https://img.shields.io/badge/React-18.2-61dafb) ![Vite](https://img.shields.io/badge/Vite-6.1-646cff) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

## ✨ Features

### 📊 Marketing Dashboard
- **Real-time KPI Tracking** - Monitor 8 key marketing metrics
- **Visual Progress Indicators** - See campaign performance at a glance
- **Team Performance Overview** - Track deliverables and responsibilities

### 💰 Budget Management
- **$850,000 Budget Tracker** - Monitor allocation and spending
- **Phase-wise Breakdown** - Pre-Launch, Launch, and Post-Launch budgets
- **Health Indicators** - Real-time budget utilization alerts

### 📋 Marketing Playbook
- **28 Pre-configured Tasks** - Complete marketing launch checklist
- **3 Launch Phases** - Organized workflow from research to retention
- **Task Dependencies** - Understand critical path and priorities

### 👥 Team Collaboration
- **8 Marketing Roles** - From CMO to Analytics Manager
- **Budget Authority Tracking** - Know who controls what budget
- **Contact Management** - Quick access to team information

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/yess-marketing-launch.git

# Navigate to project directory
cd yess-marketing-launch

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 📦 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yess-marketing-launch)

#### Manual Deployment

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

## 🏗️ Project Structure

```
├── src/
│   ├── api/              # Data management layer
│   ├── components/       # Reusable React components
│   │   ├── dashboard/    # Dashboard widgets
│   │   └── ui/          # UI components
│   ├── data/            # Marketing playbook & demo data
│   ├── pages/           # Application pages
│   └── App.jsx          # Main application
├── public/              # Static assets
└── package.json         # Dependencies
```

## 📊 Marketing KPIs Tracked

| Metric | Target | Description |
|--------|--------|-------------|
| Website Traffic | 100K visitors/month | Monthly unique visitors |
| Lead Generation | 5,000 leads | Qualified marketing leads |
| Conversion Rate | 3% | Lead to customer conversion |
| CAC | $500 | Customer acquisition cost |
| Social Reach | 1M impressions | Total social media reach |
| Email Open Rate | 25% | Email campaign performance |
| Press Mentions | 50 articles | Media coverage |
| Product Sign-ups | 10K users | New user registrations |

## 🎯 Marketing Phases

### Phase 1: Pre-Launch (3-6 months)
- Market Research & Analysis
- Brand Positioning
- Content Strategy
- Website Development
- Partnership Building

### Phase 2: Launch Campaign (1-2 months)
- Launch Event
- Paid Advertising
- PR Blitz
- Social Media Campaign
- Influencer Activations

### Phase 3: Post-Launch (Ongoing)
- Performance Analysis
- Campaign Optimization
- Customer Retention
- Growth Initiatives

## 🛠️ Technology Stack

- **React 18.2** - UI Framework
- **Vite 6.1** - Build Tool
- **TailwindCSS** - Styling
- **Radix UI** - Component Library
- **Framer Motion** - Animations
- **Recharts** - Data Visualization
- **LocalStorage** - Data Persistence

## 📝 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 🔧 Configuration

### Customize Budget
Edit budget in `src/pages/Dashboard.jsx`:
```javascript
<BudgetWidget totalBudget={850000} />
```

### Add Marketing Tasks
Edit `src/data/marketingPlaybook.js` to add new tasks

### Modify KPIs
Update metrics in `src/components/dashboard/MarketingKPIWidget.jsx`

## 📚 Documentation

- [CHANGELOG.md](./CHANGELOG.md) - Version history and changes
- [CLAUDE.md](./CLAUDE.md) - Detailed technical documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary to Yess.ai

## 🆘 Support

For issues or questions:
1. Check the [documentation](./CLAUDE.md)
2. Review the [changelog](./CHANGELOG.md)
3. Open an issue on GitHub

## 🎉 Acknowledgments

Built with ❤️ for the Yess.ai marketing team's 2025 product launch.

---

**Yess.ai** - *Transforming AI Innovation*