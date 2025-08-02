const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-accent2 py-4 flex flex-col items-center mt-auto">
      <div className="text-sm">
        &copy; {year} David C Brown. All rights reserved.
      </div>
    </footer>
  )
}

