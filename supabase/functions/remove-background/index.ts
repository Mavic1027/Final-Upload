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
    const { image_data } = await req.json()

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': Deno.env.get('REMOVE_BG_API_KEY') || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_file_b64: image_data,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Remove.bg API error: ${error}`)
    }

    const data = await response.json()

    return new Response(
      JSON.stringify({ image: data.data.result_b64 }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})