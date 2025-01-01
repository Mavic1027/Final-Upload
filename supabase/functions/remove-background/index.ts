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

    if (!image_data) {
      throw new Error('No image data provided')
    }

    console.log('Calling remove.bg API...')
    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': Deno.env.get('REMOVE_BG_API_KEY') || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image_file_b64: image_data,
        size: 'auto',
        format: 'png',
        bg_color: null,
        output_format: 'base64'
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Remove.bg API error:', error)
      throw new Error(`Remove.bg API error: ${error}`)
    }

    const data = await response.json()
    console.log('Successfully processed image')

    if (!data.data?.result_b64) {
      throw new Error('Invalid response from remove.bg API')
    }

    return new Response(
      JSON.stringify({ image: data.data.result_b64 }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    console.error('Error in remove-background function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      },
    )
  }
})