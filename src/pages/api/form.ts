import type { APIRoute } from "astro";
import { Resend } from "resend";

interface Mail {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const formData = await request.formData();
  const resend = new Resend(locals.runtime.env.RESEND_APIKEY);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!(name && email && message)) {
    return new Response(
      JSON.stringify({ error: { message: "Se envio data insuficiente" } })
    );
  }

  const mail: Mail = {
    from: `${name} <onboarding@resend.newtyf.com>`,
    to: locals.runtime.env.CONTACT_MAIL,
    subject: `Corre de contacto developer`,
    html: `
    <p>Este correo fue enviado desde la <strong>web de NEWTYF</strong></p>
    <hr />
    <p>Nombre: <strong>${name}</strong></p>
    <hr />
    <p>Correo: <strong>${email}</strong></p>
    <hr />
    ${message ? `<p>Mensaje: <strong>${message}</strong></p>` : ""}
    `,
  };

  const { data, error } = await resend.emails.send(mail);

  if (error) {
    console.log(error);
  } else {
    console.log("Successfully sended mail " + data?.id);
  }

  return new Response(JSON.stringify({ data, error }));
};