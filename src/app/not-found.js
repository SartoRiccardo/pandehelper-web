import Link from "next/link";

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center h-100 align-items-center">
      <div className="text-center">
        <h1>404 | Not Found</h1>
        <p>This page could not be found!</p>
        <Link href="/">&laquo; Home</Link>
      </div>
    </div>
  );
}
