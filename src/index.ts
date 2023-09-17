#!/usr/bin/env node
import ngrok from 'ngrok'

const main = async () => {
  const [port] = process.argv.slice(2)
  const actualPort = port ?? 3000

  await ngrok.authtoken('2VWn4BozYIP61ugNx7yNGdMO0Ct_3CiPxbNziZ9XckzC6F9ed')
  const url = await ngrok.connect({
    proto: 'http',
    addr: actualPort,
    region: 'eu'
  })
  console.log(`Sharing local server running on 127.0.0.1:${actualPort}\nShareable URL: ${url}`)
}

main()
