# Pineforge Digital Website

The official corporate website for [Pineforge Digital LLC](https://pineforge.digital). Built with a focus on performance, clean aesthetics, and reliability.

## Tech Stack

*   **Frontend:** HTML5, CSS3 (Custom Variables, Flexbox/Grid), Vanilla JavaScript.
*   **Backend:** Node.js, Express.js.
*   **Database:** SQLite (Local Dev) / PostgreSQL (Production via Neon).
*   **Email:** Nodemailer + Resend API.
*   **Security:** Helmet (Headers), Express Rate Limit, Input Validation.
*   **Deployment:** Vercel to Serverless Functions.

## Getting Started

### Prerequisites

*   Node.js (v18+)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/cannonc6-cell/Pineforge_Digital_Web.git
    cd Pineforge_Digital_Web
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env` file in the root directory (optional for local dev, required for full features):

```env
PORT=3000
# Database (Auto-switches: SQLite if empty, Postgres if set)
DATABASE_URL=postgres://user:pass@host:port/dbname

# Email (Required for contact form)
RESEND_API_KEY=re_123456789
```

### Running Locally

Start the development server with hot-reloading:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

*   **/public**: Static assets (HTML, CSS, Images).
*   **/public/js**: Frontend logic (`script.js` for UI, `cookies.js` for consent).
*   **server.js**: Main Express application entry point.
*   **database.js**: Database connection manager (Hybrid SQLite/PG).

## Security & Privacy

*   **Clean URLs:** Routes are served extension-less (e.g., `/about` instead of `/about.html`).
*   **Cookies:** Uses a minimal `visitor_id` for anonymous unique visitor counting.
*   **Headers:** Secured with `helmet` (HSTS, No-Sniff, XSS Filter).

## Deployment

This project is configured for **Vercel**.
1.  Connect your GitHub repository to Vercel.
2.  Add the environment variables in the Vercel Dashboard.
3.  Deploy! Vercel automatically detects `server.js` and strictures it as a serverless function.
