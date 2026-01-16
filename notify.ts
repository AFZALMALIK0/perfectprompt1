/**
 * Plug real providers here.
 * - SMS / WhatsApp: Twilio (recommended)
 * - Email: Resend / SendGrid / SES
 *
 * For now, we just console.log the OTP so your app works instantly.
 */
export async function sendOtp(opts: { channel: "sms" | "whatsapp" | "email"; target: string; code: string }) {
  // eslint-disable-next-line no-console
  console.log(`[OTP:${opts.channel}] to ${opts.target}: ${opts.code}`);
}
