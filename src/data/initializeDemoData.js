// Initialize demo data for Yess.ai Marketing Launch
import { marketingPlaybookData } from './marketingPlaybook';
import {
  Campaign,
  MarketingPhase,
  MarketingTask,
  MarketingTeam,
  Comment,
  Budget
} from '../api/localStorage';

export const initializeMarketingData = async () => {
  // Check version to force reinitialize if structure changed
  const DATA_VERSION = 'v2.0';
  const storedVersion = localStorage.getItem('yess_data_version');
  
  if (storedVersion !== DATA_VERSION) {
    // Clear all old data
    localStorage.clear();
    localStorage.setItem('yess_data_version', DATA_VERSION);
    console.log('Clearing old data and reinitializing...');
  } else {
    // Check if data already exists
    const existingCampaigns = await Campaign.list();
    if (existingCampaigns.length > 0) {
      console.log('Demo data already exists');
      return;
    }
  }

  console.log('Initializing Yess.ai marketing demo data...');

  // Create main campaign
  const campaign = await Campaign.create({
    name: "Yess.ai Product Launch 2025",
    description: "Comprehensive marketing campaign for the launch of Yess.ai's innovative AI platform",
    start_date: "2025-01-01",
    launch_date: "2025-06-01",
    milestone_date: "2025-06-01",
    milestone_name: "Product Launch",
    status: "in_progress",
    budget_total: 850000,
    budget_allocated: 850000,
    budget_spent: 125000
  });

  // Create stages (individual marketing tasks) from playbook
  // The VisualTimeline expects "stages" which are the individual numbered tasks
  for (const task of marketingPlaybookData.slice(0, 15)) { // Create first 15 tasks like original
    const status = task.number_index === 1 ? 'completed' :
                  task.number_index >= 9 && task.number_index <= 11 ? 'completed' : 
                  'not_started';
    
    await MarketingPhase.create({
      name: task.name,
      formal_name: task.formal_name,
      number_index: task.number_index,
      order_index: task.number_index,
      description: task.description,
      status: status,
      is_deliverable: task.is_deliverable,
      category: 'pre-launch', // All 15 tasks are in pre-launch phase
      type: task.type,
      project_id: campaign.id,
      dependencies: task.dependencies || [],
      assigned_to: task.number_index === 1 ? "sarah.chen@yess.ai" : null,
      budget_allocation: task.budget_allocation,
      estimated_hours: task.estimated_hours
    });
  }

  // Create marketing team members
  const teamMembers = [
    {
      name: "Sarah Chen",
      email: "sarah.chen@yess.ai",
      role: "CMO",
      department: "Marketing",
      is_decision_maker: true,
      avatar_url: null,
      phone: "+1 (555) 100-2001",
      linkedin: "linkedin.com/in/sarachen",
      responsibilities: "Overall marketing strategy and team leadership",
      budget_authority: 850000
    },
    {
      name: "Michael Rodriguez",
      email: "michael.r@yess.ai",
      role: "Head of Digital Marketing",
      department: "Marketing",
      is_decision_maker: true,
      avatar_url: null,
      phone: "+1 (555) 100-2002",
      linkedin: "linkedin.com/in/mrodriguez",
      responsibilities: "Digital channels, website, and online advertising",
      budget_authority: 250000
    },
    {
      name: "Emily Watson",
      email: "emily.w@yess.ai",
      role: "Content Marketing Manager",
      department: "Marketing",
      is_decision_maker: false,
      avatar_url: null,
      phone: "+1 (555) 100-2003",
      linkedin: "linkedin.com/in/emilywatson",
      responsibilities: "Content strategy, blog, and educational materials",
      budget_authority: 80000
    },
    {
      name: "David Kim",
      email: "david.kim@yess.ai",
      role: "Social Media Manager",
      department: "Marketing",
      is_decision_maker: false,
      avatar_url: null,
      phone: "+1 (555) 100-2004",
      linkedin: "linkedin.com/in/davidkim",
      responsibilities: "Social media strategy and community management",
      budget_authority: 55000
    },
    {
      name: "Jessica Thompson",
      email: "jessica.t@yess.ai",
      role: "PR Manager",
      department: "Marketing",
      is_decision_maker: false,
      avatar_url: null,
      phone: "+1 (555) 100-2005",
      linkedin: "linkedin.com/in/jessicathompson",
      responsibilities: "Public relations and media outreach",
      budget_authority: 60000
    },
    {
      name: "Alex Martinez",
      email: "alex.m@yess.ai",
      role: "Product Marketing Manager",
      department: "Marketing",
      is_decision_maker: false,
      avatar_url: null,
      phone: "+1 (555) 100-2006",
      linkedin: "linkedin.com/in/alexmartinez",
      responsibilities: "Product positioning and go-to-market strategy",
      budget_authority: 45000
    },
    {
      name: "Rachel Green",
      email: "rachel.g@yess.ai",
      role: "Event Marketing Coordinator",
      department: "Marketing",
      is_decision_maker: false,
      avatar_url: null,
      phone: "+1 (555) 100-2007",
      linkedin: "linkedin.com/in/rachelgreen",
      responsibilities: "Launch event planning and coordination",
      budget_authority: 60000
    },
    {
      name: "Tom Anderson",
      email: "tom.a@yess.ai",
      role: "Analytics Manager",
      department: "Marketing",
      is_decision_maker: false,
      avatar_url: null,
      phone: "+1 (555) 100-2008",
      linkedin: "linkedin.com/in/tomanderson",
      responsibilities: "Marketing analytics and performance tracking",
      budget_authority: 25000
    }
  ];

  for (const member of teamMembers) {
    await MarketingTeam.create(member);
  }

  // Create some sample comments on phases
  const sampleComments = [
    {
      content: "Great progress on the market research! The competitor analysis is particularly insightful.",
      author_name: "Sarah Chen",
      author_email: "sarah.chen@yess.ai",
      stage_id: createdPhases[0].id,
      project_id: campaign.id
    },
    {
      content: "We should consider increasing the budget for influencer partnerships based on early outreach responses.",
      author_name: "Michael Rodriguez",
      author_email: "michael.r@yess.ai",
      stage_id: createdPhases[2].id,
      project_id: campaign.id
    },
    {
      content: "Website mockups look fantastic! Let's schedule a review meeting with the product team.",
      author_name: "Emily Watson",
      author_email: "emily.w@yess.ai",
      stage_id: createdPhases[1].id,
      project_id: campaign.id
    }
  ];

  for (const comment of sampleComments) {
    await Comment.create(comment);
  }

  // Create budget allocations
  const budgetCategories = [
    {
      category: "Digital Advertising",
      allocated: 200000,
      spent: 35000,
      phase: "launch",
      description: "PPC, social media ads, and programmatic advertising"
    },
    {
      category: "Content Creation",
      allocated: 150000,
      spent: 42000,
      phase: "pre-launch",
      description: "Blog posts, videos, whitepapers, and case studies"
    },
    {
      category: "Events & PR",
      allocated: 120000,
      spent: 18000,
      phase: "launch",
      description: "Launch event, press releases, and media outreach"
    },
    {
      category: "Website & Digital Infrastructure",
      allocated: 100000,
      spent: 25000,
      phase: "pre-launch",
      description: "Website development, marketing automation, and tools"
    },
    {
      category: "Influencer Partnerships",
      allocated: 80000,
      spent: 5000,
      phase: "pre-launch",
      description: "Influencer collaborations and sponsored content"
    }
  ];

  for (const budget of budgetCategories) {
    await Budget.create({
      ...budget,
      campaign_id: campaign.id
    });
  }

  console.log('Demo data initialization complete!');
  return {
    campaign,
    phases: createdPhases,
    teamMembers: teamMembers.length,
    tasks: 20
  };
};