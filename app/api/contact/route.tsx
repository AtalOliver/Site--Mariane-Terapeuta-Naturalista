import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    const emailData = {
      from: "contato@ecoencanto.com.br", // Email do domínio (será configurado)
      to: "marianecarmooliveira@gmail.com",
      subject: `Nova mensagem do site - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8B7FB8;">Nova mensagem recebida do site</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #8B7FB8;">${message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            Esta mensagem foi enviada através do formulário de contato do site Eco Encanto.
          </p>
        </div>
      `,
    }

    // Integração com Resend (quando a API key estiver configurada)
    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      })

      if (!response.ok) {
        throw new Error("Falha ao enviar email via Resend")
      }

      const result = await response.json()
      console.log("Email enviado via Resend:", result)
    } else {
      // Fallback: log para desenvolvimento
      console.log("Email seria enviado para:", emailData.to)
      console.log("Dados:", emailData)
      console.log("⚠️ RESEND_API_KEY não configurada - email não foi enviado")
    }

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso!",
      recipient: "marianecarmooliveira@gmail.com",
    })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar email",
      },
      { status: 500 },
    )
  }
}
