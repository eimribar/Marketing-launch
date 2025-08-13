// Import from our local storage implementation
import {
  Campaign,
  MarketingPhase,
  MarketingTask,
  MarketingTeam,
  Project,
  Stage,
  Deliverable,
  TeamMember,
  Comment,
  Notification,
  OutOfScopeRequest,
  Budget,
  Analytics,
  User,
  initializeDemoData
} from './localStorage';

// Export marketing-focused entities
export {
  Campaign,
  MarketingPhase,
  MarketingTask,
  MarketingTeam,
  Budget,
  Analytics
};

// Export compatibility entities for existing code
export {
  Project,
  Stage,
  Deliverable,
  TeamMember,
  Comment,
  Notification,
  OutOfScopeRequest,
  User
};

// Initialize demo data on first load
initializeDemoData();