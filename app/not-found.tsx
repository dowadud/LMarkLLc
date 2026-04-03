import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-slate-900">404</h1>
      <p className="mt-2 text-slate-600">That page does not exist.</p>
      <Button asChild className="mt-8 rounded-xl">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
