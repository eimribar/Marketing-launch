// Local storage based data management for Yess Marketing Launch
// This replaces the Base44 SDK with a simple local storage solution

class LocalStorageDB {
  constructor(entityName) {
    this.entityName = entityName;
    this.storageKey = `yess_${entityName}`;
  }

  // Get all items
  async list(orderBy = null) {
    try {
      const data = localStorage.getItem(this.storageKey);
      let items = data ? JSON.parse(data) : [];
      
      if (orderBy) {
        const descending = orderBy.startsWith('-');
        const field = descending ? orderBy.substring(1) : orderBy;
        
        items.sort((a, b) => {
          let aVal = a[field];
          let bVal = b[field];
          
          // Handle dates
          if (field.includes('date')) {
            aVal = new Date(aVal);
            bVal = new Date(bVal);
          }
          
          if (descending) {
            return bVal > aVal ? 1 : -1;
          }
          return aVal > bVal ? 1 : -1;
        });
      }
      
      return items;
    } catch (error) {
      console.error(`Error listing ${this.entityName}:`, error);
      return [];
    }
  }

  // Get single item by ID
  async get(id) {
    const items = await this.list();
    return items.find(item => item.id === id);
  }

  // Create new item
  async create(data) {
    const items = await this.list();
    const newItem = {
      ...data,
      id: this.generateId(),
      created_date: new Date().toISOString(),
      updated_date: new Date().toISOString()
    };
    items.push(newItem);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
    return newItem;
  }

  // Update existing item
  async update(id, data) {
    const items = await this.list();
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = {
        ...items[index],
        ...data,
        updated_date: new Date().toISOString()
      };
      localStorage.setItem(this.storageKey, JSON.stringify(items));
      return items[index];
    }
    return null;
  }

  // Delete item
  async delete(id) {
    const items = await this.list();
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(filtered));
    return true;
  }

  // Generate unique ID
  generateId() {
    return `${this.entityName}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Clear all data for this entity
  async clear() {
    localStorage.removeItem(this.storageKey);
    return true;
  }
}

// Initialize demo data if empty
export const initializeDemoData = async () => {
  // This function is now just a placeholder
  // The actual initialization happens in src/data/initializeDemoData.js
  // which is called from App.jsx on first load
  return true;
};

// Export entity managers
export const Campaign = new LocalStorageDB('Campaign');
export const MarketingPhase = new LocalStorageDB('MarketingPhase');
export const MarketingTask = new LocalStorageDB('MarketingTask');
export const MarketingTeam = new LocalStorageDB('MarketingTeam');
export const Comment = new LocalStorageDB('Comment');
export const Notification = new LocalStorageDB('Notification');
export const Budget = new LocalStorageDB('Budget');
export const Analytics = new LocalStorageDB('Analytics');

// Compatibility exports for existing code
export const Project = Campaign;
export const Stage = MarketingPhase;
export const Deliverable = MarketingTask;
export const TeamMember = MarketingTeam;
export const OutOfScopeRequest = new LocalStorageDB('OutOfScopeRequest');

// Auth mock
export const User = {
  login: async (email, password) => {
    // Mock login - always succeed for demo
    return { 
      email, 
      name: email.split('@')[0],
      role: 'marketing_manager'
    };
  },
  logout: async () => {
    return true;
  },
  getCurrentUser: () => {
    return {
      email: 'team@yess.ai',
      name: 'Marketing Team',
      role: 'marketing_manager'
    };
  }
};