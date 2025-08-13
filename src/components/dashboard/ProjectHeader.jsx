import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, FolderOpen, Rocket, Calendar } from "lucide-react";
import { differenceInDays } from "date-fns";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import NotificationBell from "./NotificationBell";

export default function ProjectHeader({ project, onOpenOutOfScopeForm }) {
  const milestoneDays = project?.milestone_date
    ? differenceInDays(new Date(project.milestone_date), new Date())
    : 84;

  return (
    <div>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                        <Rocket className="w-7 h-7 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{project?.name || "Yess.ai Product Launch 2025"}</h1>
                        <div className="flex items-center gap-2 mt-2">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <p className="text-gray-600">
                                {milestoneDays > 0 ? `${milestoneDays} Days Until ${project?.milestone_name || 'Product Launch'}` : `Milestone Reached: ${project?.milestone_name || 'Product Launch'}`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-2 flex-shrink-0 items-center">
                <NotificationBell />
                <Button variant="outline" asChild>
                  <a href="https://slack.com/app_redirect?channel=C123456789" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Slack
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://drive.google.com/drive/folders/your-project-folder-id" target="_blank" rel="noopener noreferrer">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    Drive
                  </a>
                </Button>
                <Button variant="outline" onClick={onOpenOutOfScopeForm}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Request
                </Button>
                <Button variant="outline" asChild>
                  <Link to={createPageUrl('Timeline')}>Timeline View</Link>
                </Button>
            </div>
        </div>
    </div>
  );
}