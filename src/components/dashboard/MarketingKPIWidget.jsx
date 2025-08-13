import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  Target, 
  MousePointerClick,
  Mail,
  Share2,
  FileText,
  UserPlus,
  ArrowUp,
  ArrowDown
} from "lucide-react";
import { motion } from "framer-motion";

const defaultKPIs = [
  { 
    id: 1,
    name: "Website Traffic", 
    target: 100000, 
    current: 45230, 
    unit: "visitors", 
    icon: MousePointerClick,
    color: "blue",
    trend: "+12%"
  },
  { 
    id: 2,
    name: "Lead Generation", 
    target: 5000, 
    current: 2150, 
    unit: "leads", 
    icon: Users,
    color: "green",
    trend: "+25%"
  },
  { 
    id: 3,
    name: "Conversion Rate", 
    target: 3, 
    current: 2.1, 
    unit: "%", 
    icon: Target,
    color: "purple",
    trend: "+0.3%"
  },
  { 
    id: 4,
    name: "Email Open Rate", 
    target: 25, 
    current: 28, 
    unit: "%", 
    icon: Mail,
    color: "indigo",
    trend: "+5%"
  },
  { 
    id: 5,
    name: "Social Reach", 
    target: 1000000, 
    current: 623000, 
    unit: "impressions", 
    icon: Share2,
    color: "pink",
    trend: "+45%"
  },
  { 
    id: 6,
    name: "Press Mentions", 
    target: 50, 
    current: 18, 
    unit: "articles", 
    icon: FileText,
    color: "orange",
    trend: "+3"
  },
  { 
    id: 7,
    name: "Sign-ups", 
    target: 10000, 
    current: 3420, 
    unit: "users", 
    icon: UserPlus,
    color: "teal",
    trend: "+180"
  },
  { 
    id: 8,
    name: "CAC", 
    target: 500, 
    current: 420, 
    unit: "$", 
    icon: TrendingUp,
    color: "yellow",
    trend: "-15%",
    inverse: true // Lower is better
  }
];

export default function MarketingKPIWidget({ kpis = defaultKPIs }) {
  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-emerald-600",
      purple: "from-purple-500 to-purple-600",
      indigo: "from-indigo-500 to-indigo-600",
      pink: "from-pink-500 to-pink-600",
      orange: "from-orange-500 to-orange-600",
      teal: "from-teal-500 to-teal-600",
      yellow: "from-yellow-500 to-amber-600"
    };
    return colors[color] || colors.blue;
  };

  const formatValue = (value, unit) => {
    if (unit === "$") return `$${value.toLocaleString()}`;
    if (unit === "%" || unit === "users" || unit === "leads" || unit === "articles") {
      return value.toLocaleString();
    }
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toLocaleString();
  };

  const calculateProgress = (current, target, inverse = false) => {
    if (inverse) {
      // For metrics where lower is better (like CAC)
      return Math.min(100, ((target / current) * 100));
    }
    return Math.min(100, (current / target) * 100);
  };

  const getProgressColor = (progress, inverse = false) => {
    if (inverse) {
      if (progress >= 80) return "bg-green-500";
      if (progress >= 50) return "bg-yellow-500";
      return "bg-red-500";
    }
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-red-500";
  };

  const getTrendIcon = (trend) => {
    if (!trend) return null;
    const isPositive = trend.startsWith('+');
    return isPositive ? (
      <ArrowUp className="w-3 h-3 text-green-500" />
    ) : (
      <ArrowDown className="w-3 h-3 text-red-500" />
    );
  };

  // Calculate overall performance
  const overallProgress = kpis.reduce((sum, kpi) => {
    return sum + calculateProgress(kpi.current, kpi.target, kpi.inverse);
  }, 0) / kpis.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-4"
    >
      {/* Main KPI Card */}
      <Card className="border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              Marketing KPIs
            </CardTitle>
            <div className="text-right">
              <p className="text-xs text-slate-500">Overall Performance</p>
              <p className="text-lg font-bold text-slate-900">{overallProgress.toFixed(0)}%</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {kpis.slice(0, 4).map((kpi) => {
              const Icon = kpi.icon;
              const progress = calculateProgress(kpi.current, kpi.target, kpi.inverse);
              
              return (
                <div 
                  key={kpi.id} 
                  className="p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors bg-white/50"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 bg-gradient-to-br ${getColorClasses(kpi.color)} rounded-md flex items-center justify-center`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-700">{kpi.name}</p>
                        <div className="flex items-center gap-1 mt-0.5">
                          <p className="text-sm font-bold text-slate-900">
                            {formatValue(kpi.current, kpi.unit)}
                          </p>
                          <span className="text-xs text-slate-500">
                            / {formatValue(kpi.target, kpi.unit)} {kpi.unit}
                          </span>
                        </div>
                      </div>
                    </div>
                    {kpi.trend && (
                      <div className="flex items-center gap-0.5">
                        {getTrendIcon(kpi.trend)}
                        <span className={`text-xs font-medium ${
                          kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {kpi.trend}
                        </span>
                      </div>
                    )}
                  </div>
                  <Progress 
                    value={progress} 
                    className="h-1.5"
                    indicatorClassName={getProgressColor(progress, kpi.inverse)}
                  />
                  <p className="text-xs text-slate-500 mt-1 text-right">
                    {progress.toFixed(0)}% of target
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Secondary KPIs */}
      <div className="grid grid-cols-2 gap-3">
        {kpis.slice(4).map((kpi) => {
          const Icon = kpi.icon;
          const progress = calculateProgress(kpi.current, kpi.target, kpi.inverse);
          
          return (
            <Card 
              key={kpi.id} 
              className="border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 bg-gradient-to-br ${getColorClasses(kpi.color)} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  {kpi.trend && (
                    <div className="flex items-center gap-0.5">
                      {getTrendIcon(kpi.trend)}
                      <span className={`text-xs font-medium ${
                        kpi.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {kpi.trend}
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-xs font-medium text-slate-600 mb-1">{kpi.name}</p>
                <p className="text-lg font-bold text-slate-900">
                  {formatValue(kpi.current, kpi.unit)}
                  <span className="text-xs font-normal text-slate-500 ml-1">{kpi.unit}</span>
                </p>
                <div className="mt-2">
                  <Progress 
                    value={progress} 
                    className="h-1"
                    indicatorClassName={getProgressColor(progress, kpi.inverse)}
                  />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-slate-500">
                      Target: {formatValue(kpi.target, kpi.unit)}
                    </span>
                    <span className="text-xs font-medium text-slate-700">
                      {progress.toFixed(0)}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </motion.div>
  );
}