interface BackgroundGradientProps {
  children: React.ReactNode;
}

export default function BackgroundGradient({ children }: BackgroundGradientProps) {
  return (
    <div className="relative">
      {/* 배경 그라데이션 */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 -z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 -z-10" />
      
      {children}
    </div>
  );
}
