import { cn } from '@/utils/cn';

export default function MaxWidthContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('md:max-w-10/12 mx-auto', className)}>{children}</div>
  );
}
