import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import "../styles/globals.css";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en">
    <body>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
