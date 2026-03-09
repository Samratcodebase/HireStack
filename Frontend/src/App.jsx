import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/clerk-react";

function App() {
  const styles = {
    page: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f172a, #1e293b, #020617)",
      fontFamily: "Inter, sans-serif",
    },

    card: {
      backdropFilter: "blur(20px)",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "18px",
      padding: "50px",
      width: "360px",
      textAlign: "center",
      color: "white",
      boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
    },

    title: {
      fontSize: "28px",
      fontWeight: "700",
      marginBottom: "10px",
    },

    subtitle: {
      fontSize: "14px",
      opacity: "0.7",
      marginBottom: "30px",
    },

    buttons: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },

    button: {
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },

    signIn: {
      background: "#6366f1",
      color: "white",
    },

    signUp: {
      background: "#22c55e",
      color: "white",
    },

    logout: {
      marginTop: "20px",
      background: "#ef4444",
      color: "white",
      padding: "10px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
    },

    userArea: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Clerk Auth</h1>
        <p style={styles.subtitle}>Secure authentication with Clerk</p>

        <SignedOut>
          <div style={styles.buttons}>
            <SignInButton mode="modal">
              <button style={{ ...styles.button, ...styles.signIn }}>
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button style={{ ...styles.button, ...styles.signUp }}>
                Create Account
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div style={styles.userArea}>
            <UserButton afterSignOutUrl="/" />

            <SignOutButton>
              <button style={styles.logout}>Sign Out</button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}

export default App;
