import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    // Basic email validation
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(
        JSON.stringify({ isValid: false }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Split email into local and domain parts
    const [localPart, domain] = email.split('@')
    
    // Basic validation rules
    const isValidLocalPart = localPart.length > 0 && localPart.length <= 64
    const isValidDomain = domain.length > 0 && domain.length <= 255 && domain.includes('.')
    
    // Check if domain has MX records (indicates it can receive email)
    let hasMXRecord = false
    try {
      const dnsResponse = await fetch(`https://dns.google/resolve?name=${domain}&type=MX`)
      const dnsData = await dnsResponse.json()
      hasMXRecord = dnsData.Answer && dnsData.Answer.length > 0
    } catch (error) {
      console.error('DNS lookup error:', error)
      hasMXRecord = false
    }

    const isValid = isValidLocalPart && isValidDomain && hasMXRecord

    return new Response(
      JSON.stringify({ isValid }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})