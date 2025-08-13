import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function BudgetWidget({ tasks = [], totalBudget = 850000 }) {
  // Calculate budget metrics
  const allocatedBudget = tasks.reduce((sum, task) => sum + (task.budget_allocation || 0), 0);
  const spentBudget = tasks.reduce((sum, task) => sum + (task.budget_spent || 0), 0);
  const remainingBudget = totalBudget - spentBudget;
  const utilizationRate = totalBudget > 0 ? (spentBudget / totalBudget) * 100 : 0;
  const allocationRate = totalBudget > 0 ? (allocatedBudget / totalBudget) * 100 : 0;

  // Calculate budget by phase
  const budgetByPhase = {
    'pre-launch': { allocated: 0, spent: 0 },
    'launch': { allocated: 0, spent: 0 },
    'post-launch': { allocated: 0, spent: 0 }
  };

  tasks.forEach(task => {
    const category = task.category || 'pre-launch';
    if (budgetByPhase[category]) {
      budgetByPhase[category].allocated += task.budget_allocation || 0;
      budgetByPhase[category].spent += task.budget_spent || 0;
    }
  });

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getUtilizationColor = (rate) => {
    if (rate < 50) return "text-green-600";
    if (rate < 80) return "text-yellow-600";
    return "text-red-600";
  };

  const getProgressColor = (rate) => {
    if (rate < 50) return "bg-green-500";
    if (rate < 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              Marketing Budget Tracker
            </CardTitle>
            {utilizationRate > 80 && (
              <div className="flex items-center gap-1 text-amber-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-medium">High Utilization</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Total Budget Overview */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Total Budget</span>
              <span className="font-semibold text-slate-900">{formatCurrency(totalBudget)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Allocated</span>
              <span className="font-medium text-blue-600">{formatCurrency(allocatedBudget)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Spent</span>
              <span className={`font-medium ${getUtilizationColor(utilizationRate)}`}>
                {formatCurrency(spentBudget)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Remaining</span>
              <span className="font-medium text-green-600">{formatCurrency(remainingBudget)}</span>
            </div>
          </div>

          {/* Utilization Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-slate-600">
              <span>Budget Utilization</span>
              <span>{utilizationRate.toFixed(1)}%</span>
            </div>
            <Progress 
              value={utilizationRate} 
              className="h-2"
              indicatorClassName={getProgressColor(utilizationRate)}
            />
          </div>

          {/* Budget by Phase */}
          <div className="pt-2 space-y-3 border-t border-slate-100">
            <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Budget by Phase
            </h4>
            
            {Object.entries(budgetByPhase).map(([phase, budget]) => {
              const phaseUtilization = budget.allocated > 0 
                ? (budget.spent / budget.allocated) * 100 
                : 0;
              
              return (
                <div key={phase} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium capitalize text-slate-700">
                      {phase.replace('-', ' ')}
                    </span>
                    <div className="flex items-center gap-2">
                      {phaseUtilization > 100 ? (
                        <TrendingUp className="w-3 h-3 text-red-500" />
                      ) : phaseUtilization > 0 ? (
                        <TrendingDown className="w-3 h-3 text-green-500" />
                      ) : null}
                      <span className="text-xs text-slate-600">
                        {formatCurrency(budget.spent)} / {formatCurrency(budget.allocated)}
                      </span>
                    </div>
                  </div>
                  <Progress 
                    value={phaseUtilization} 
                    className="h-1.5"
                    indicatorClassName={getProgressColor(phaseUtilization)}
                  />
                </div>
              );
            })}
          </div>

          {/* Budget Health Indicator */}
          <div className="pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-600">Budget Health</span>
              <div className="flex items-center gap-1">
                {utilizationRate < 50 && (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">Healthy</span>
                  </>
                )}
                {utilizationRate >= 50 && utilizationRate < 80 && (
                  <>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                    <span className="text-xs text-yellow-600 font-medium">Monitor</span>
                  </>
                )}
                {utilizationRate >= 80 && (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-xs text-red-600 font-medium">Critical</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}