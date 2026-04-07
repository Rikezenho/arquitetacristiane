import { env } from 'cloudflare:workers';

function renderBody(status, content) {
  const html = `
    <script>
      const receiveMessage = (message) => {
        window.opener.postMessage(
          'authorization:github:${status}:${JSON.stringify(content)}',
          message.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      window.opener.postMessage("authorizing:github", "*");
    </script>
  `;

  return new Blob([html]);
}

export async function GET({ request }) {
  try {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');

    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'cloudflare-workers-github-oauth-login-demo',
        accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const result = await response.json();

    if (result.error) {
      return new Response(renderBody('error', result), {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
        status: 401,
      });
    }

    return new Response(
      renderBody('success', {
        token: result.access_token,
        provider: 'github',
      }),
      {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response(error.message, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
      status: 500,
    });
  }
}