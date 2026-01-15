interface NetlifyIdentityUser {
  id: string;
  email: string;
  user_metadata: Record<string, any>;
  app_metadata: Record<string, any>;
}

interface NetlifyIdentity {
  on(event: "init", callback: (user: NetlifyIdentityUser | null) => void): void;
  on(event: "login", callback: (user: NetlifyIdentityUser) => void): void;
  on(event: "logout", callback: () => void): void;
  on(event: "error", callback: (error: Error) => void): void;
  on(event: "close", callback: () => void): void;
  open(tab?: string): void;
  close(): void;
  currentUser(): NetlifyIdentityUser | null;
  logout(): void;
}

interface Window {
  netlifyIdentity?: NetlifyIdentity;
}
