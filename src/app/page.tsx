import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Zap, Target, BarChart3, Shield, CheckCircle, ArrowRight, Users, Clock } from "lucide-react";

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-background" />
            </div>
            <span className="font-display font-bold text-foreground text-lg">GoalForge</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sign-in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Enterprise-grade performance management
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.08] text-balance">
            Goal Setting That
            <br />
            <span className="gradient-text">Actually Works</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            GoalForge replaces spreadsheets and manual reviews with a structured,
            workflow-driven performance management system built for modern organizations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link
              href="/sign-up"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity hover-lift"
            >
              Start free trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sign-in"
              className="flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-accent transition-colors"
            >
              Sign in to account
            </Link>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          {["OKR Management", "Manager Approvals", "Quarterly Check-ins", "Analytics Dashboard", "Audit Trail", "Role-based Access", "CSV/Excel Export", "Shared Goals"].map((f) => (
            <div key={f} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground">
              <CheckCircle className="w-3.5 h-3.5 text-muted-foreground" />
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "3", label: "User Roles", sub: "Employee, Manager, Admin" },
              { value: "8", label: "Max Goals", sub: "per cycle per user" },
              { value: "4", label: "Quarters", sub: "Q1 through Q4 tracking" },
              { value: "∞", label: "Audit Trail", sub: "Complete history" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="font-medium text-foreground mt-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Everything you need
          </h2>
          <p className="text-muted-foreground mt-3 text-lg max-w-xl mx-auto">
            A complete performance management platform for every role in your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-6 h-6" />,
              title: "Structured Goal Setting",
              desc: "Set up to 8 goals with weighted percentages, thrust areas, UoM types, and deadlines. Real-time validation ensures total = 100%."
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Manager Approval Workflow",
              desc: "Managers can approve, reject, or return goals for rework. Inline editing of targets and weightages before locking."
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Quarterly Check-ins",
              desc: "Q1–Q4 check-in windows with automatic open/close. Track achievement vs target with live progress score calculation."
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Analytics Dashboard",
              desc: "QoQ trend charts, department performance, completion heatmaps, and top performer rankings with beautiful visualizations."
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Shared Goals System",
              desc: "Push departmental KPIs to multiple employees. Employees can only modify weightage — title and target stay read-only."
            },
            {
              icon: <CheckCircle className="w-6 h-6" />,
              title: "Complete Audit Trail",
              desc: "Timeline-style audit log for every action — edits, approvals, rejections, unlocks. Before/after value tracking."
            },
          ].map((feature, i) => (
            <div key={i} className="card-elevated p-6 hover-lift">
              <div className="w-11 h-11 rounded-xl bg-foreground text-background flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role Cards */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Built for every role
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                role: "Employee",
                color: "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800",
                badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                items: [
                  "Create and submit goals",
                  "View locked approved goals",
                  "Update quarterly achievements",
                  "Track personal progress",
                  "View notifications",
                ]
              },
              {
                role: "Manager (L1)",
                color: "bg-amber-50 dark:bg-amber-900/10 border-amber-200 dark:border-amber-800",
                badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
                items: [
                  "Review team submissions",
                  "Approve / reject / rework",
                  "Inline edit targets & weights",
                  "Add structured comments",
                  "View team performance",
                ]
              },
              {
                role: "Admin / HR",
                color: "bg-purple-50 dark:bg-purple-900/10 border-purple-200 dark:border-purple-800",
                badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                items: [
                  "Manage all users & roles",
                  "Create performance cycles",
                  "Unlock goal submissions",
                  "Org-wide analytics",
                  "Full audit trail access",
                ]
              },
            ].map((card) => (
              <div key={card.role} className={`p-6 rounded-xl border ${card.color}`}>
                <span className={`status-badge mb-4 inline-flex ${card.badgeColor}`}>{card.role}</span>
                <ul className="space-y-2.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold text-foreground">
            Ready to transform<br />performance management?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Replace your spreadsheets with a system that actually works.
          </p>
          <Link
            href="/sign-up"
            className="inline-flex items-center gap-2 mt-8 bg-foreground text-background px-8 py-3.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity hover-lift"
          >
            Get started free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-foreground rounded flex items-center justify-center">
              <Zap className="w-3 h-3 text-background" />
            </div>
            <span className="font-display font-bold text-foreground text-sm">GoalForge</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} GoalForge. Built for AtomQuest Hackathon. Owned by xe54z.
          </p>
        </div>
      </footer>
    </main>
  );
}
