const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="flex bg-[url('/background.png')] bg-cover items-center h-screen justify-center md:justify-end">
        {children}
    </main>
  );
};

export default AuthLayout;
