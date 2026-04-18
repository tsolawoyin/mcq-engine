export default function Footer() {
  return (
    <footer className="border-t py-4 text-sm text-muted-foreground">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p>
          Created by{" "}
          <a
            href="https://github.com/tsolawoyin"
            target="_blank"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            tsolawoyin
          </a>
        </p>
        <p>
          Open source &mdash;{" "}
          <a
            href="https://wa.me/2348162200772"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary"
          >
            contribute questions
          </a>
        </p>
      </div>
    </footer>
  );
}
