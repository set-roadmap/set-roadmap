interface NavbarProps {
  children: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  return <nav className="p-5 border-b">{children}</nav>;
}
