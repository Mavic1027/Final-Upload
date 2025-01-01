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
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Remove.bg API error:', errorText)
      throw new Error(`Remove.bg API error: ${errorText}`)
    }

    // Get the response as a buffer since it's a binary response
    const imageBuffer = await response.arrayBuffer()
    // Convert buffer to base64
    const base64Image = btoa(
      String.fromCharCode(...new Uint8Array(imageBuffer))
    )

    console.log('Successfully processed image')

    return new Response(
      JSON.stringify({ 
        success: true,
        image: base64Image 
      }),
      {
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
      },
    )
  } catch (error) {
    console.error('Error in remove-background function:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
      },
    )
  }
})